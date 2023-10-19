#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;

layout(std140) uniform ModelUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  vec4 u_borderColor;
  vec3 u_blur;
  float u_icon_step;
  vec2 u_textSize;
  float u_heightfixed;
  float u_vertexScale;
  float u_raisingHeight;
  float u_linearColor;
  float u_arrow;
  float u_arrowHeight;
  float u_arrowWidth;
  float u_tailWidth;
  float u_textureBlend;
  float u_borderWidth;
  float u_line_texture;
  float u_linearDir;
  float u_line_type;
};

in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_texture_data;

#pragma include "picking"

layout(std140) uniform AnimationUniforms {
  vec4 u_animate;
  float u_time;
};

out vec4 outputColor;

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_texture_data.r; // 当前点位距离占线总长的比例
  outputColor = v_color;
  // anti-alias
  // float blur = 1.0 - smoothstep(u_blur, 1., length(v_normal.xy));
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_texture_data.g;      // 当前顶点的距离
    float d_texPixelLen = v_texture_data.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_texture_data.a;  // 线图层贴图部分的 v 坐标值

    // v = max(smoothstep(0.95, 1.0, v), v);
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor += pattern;
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = pattern;
    }
  } 

  float v = v_texture_data.a;
  float borderWidth = min(0.5, u_borderWidth);
  // 绘制 border
  if(borderWidth > 0.01) {
    float borderOuterWidth = borderWidth / 2.0;


    if(v >= 1.0 - borderWidth || v <= borderWidth) {
      if(v > borderWidth) { // 外侧
        float linear = smoothstep(0.0, 1.0, (v - (1.0 - borderWidth))/borderWidth);
        //  float linear = step(0.0, (v - (1.0 - borderWidth))/borderWidth);
        outputColor.rgb = mix(outputColor.rgb, u_borderColor.rgb, linear);
      } else if(v <= borderWidth) {
        float linear = smoothstep(0.0, 1.0, v/borderWidth);
        outputColor.rgb = mix(u_borderColor.rgb, outputColor.rgb, linear);
      }
    }

    if(v < borderOuterWidth) {
      outputColor.a = mix(0.0, outputColor.a, v/borderOuterWidth);
    } else if(v > 1.0 - borderOuterWidth) {
      outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - borderOuterWidth))/borderOuterWidth);
    }
  }

  // blur
  float blurV = v_texture_data.a;
  if(blurV < 0.5) {
    outputColor.a *= mix(u_blur.r, u_blur.g, blurV/0.5);
  } else {
    outputColor.a *= mix(u_blur.g, u_blur.b, (blurV - 0.5)/0.5);
  }
  
  outputColor = filterColor(outputColor);
}

layout(location = 0) in vec3 a_Position;
layout(location = 1) in vec4 a_Color;
layout(location = 7) in vec3 a_Extrude;
layout(location = 8) in float a_Size;
layout(location = 9) in vec2 a_Uv;

out vec2 v_uv; // 本身的 uv 坐标
out vec2 v_Iconuv; // icon 贴图的 uv 坐标
out float v_opacity;

layout(std140) uniform ModelUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
  float u_size_unit;
};

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  vec3 extrude = a_Extrude;
  v_uv = (a_Extrude.xy + 1.0)/2.0;
  v_uv.y = 1.0 - v_uv.y;
  v_Iconuv = a_Uv;
  v_opacity = opacity;
  float newSize = a_Size;
  if(u_size_unit == 1.0) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }
  
  // vec2 offset = (u_RotateMatrix * extrude.xy * (a_Size) + textrueOffsets);
  vec2 offset = (extrude.xy * (newSize) + offsets);

  offset = rotate_matrix(offset,rotation);

  vec3 aPosition = a_Position;

  offset = project_pixel(offset);

  vec4 project_pos = project_position(vec4(aPosition.xy, 0.0, 1.0));
  float raisingHeight = u_raisingHeight;
  if(u_heightfixed < 1.0) { // height fixed
    raisingHeight = project_pixel(u_raisingHeight);
  } else {
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace_v2(vec4(project_pos.xy + offset, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}

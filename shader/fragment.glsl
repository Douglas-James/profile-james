uniform sampler2D globeTexture;

varying vec2 vectorUV;
varying vec3 vertexNormal;
void main(){
  float intensity = 0.5 - dot(
  vertexNormal, vec3(1, 0.1, 0.7));
  vec3 atmosphere = vec3(0.1, 0.6, 0.6) * pow(intensity, 1.1);
  gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vectorUV).xyz, 1.0);
}
uniform sampler2D globeTexture;

varying vec2 vectorUV;
varying vec3 vertexNormal;
void main(){
  float intensity = 1.03 - dot(
    vertexNormal, vec3(0.0, 0.0, 1.0));
  vec3 atmosphere = vec3(3, 0.6, 1.04) * pow(intensity, 1.5);
  gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vectorUV).xyz, 1.0);
}
varying vec3 vertexNormal;


void main(){
  float intensity = pow(0.9- dot(vertexNormal, vec3(0, 0, 1
  )), 2.2);
  gl_FragColor = vec4(0.35f, 0.63f, 0.63f, 1.0f) * intensity + intensity;
}
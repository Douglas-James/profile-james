varying vec3 vertexNormal;


void main(){
  float intensity = pow(0.9- dot(vertexNormal, vec3(0, 0, 1
  )), 2.0);
  gl_FragColor = vec4(0, 0.6, 0.6, 1) * intensity;
}
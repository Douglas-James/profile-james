varying vec3 vertexNormal;


void main(){
  float intensity = pow(0.9- dot(vertexNormal, vec3(0, 0, 1
  )), 2.2);
  gl_FragColor = vec4(0.4, 0.5, 0.5, 1) * intensity;
}
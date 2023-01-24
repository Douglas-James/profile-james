varying vec3 vertexNormal;


void main(){
  float intensity = pow(0.8- dot(vertexNormal, vec3(0, 0, 1
  )), 2.2);
  gl_FragColor = vec4(1, 0.5, 0.5, 0.5) * intensity;
}
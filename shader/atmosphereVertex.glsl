varying vec3 vertexNormal;

void main(){
  vertexNormal = normalize(normal);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1);
}

varying vec2 vectorUV;
varying vec3 vertexNormal;

void main(){
  vectorUV = uv;
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}

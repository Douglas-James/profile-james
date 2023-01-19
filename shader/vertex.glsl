varying vec2 vectorUV;

void main(){
  vectorUV = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}

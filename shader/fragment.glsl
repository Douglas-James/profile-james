uniform sampler2D globeTexture;

varying vec2 vectorUV;
void main(){
  gl_FragColor = texture2D(globeTexture, vectorUV);
}
var a=['apply','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','console','warn','info','error','trace','debug','exception','setRadius','setPower','createIDWAsync','createIDW','MIN_VALUE','MAX_VALUE','latMin','lonMin','lonMax','value','push','width','height','valueMatrix','getColors','length','sqrt','pow','minVal','maxVal','createElement','idwRaster_','lon','lat','latMax','getContext','getImageData','red','green','blue','putImageData','getType','Classified','hexToColorWithValue','ceil','prototype','slice','call'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0x180));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var c=function(){var e=!![];return function(f,g){var h=e?function(){if(g){var i=g[b('0x0')](f,arguments);g=null;return i;}}:function(){};e=![];return h;};}();var d=c(this,function(){var j=function(){};var k;try{var l=Function(b('0x1')+b('0x2')+');');k=l();}catch(m){k=window;}if(!k[b('0x3')]){k['console']=function(n){var o={};o['log']=n;o[b('0x4')]=n;o['debug']=n;o[b('0x5')]=n;o[b('0x6')]=n;o['exception']=n;o[b('0x7')]=n;return o;}(j);}else{k[b('0x3')]['log']=j;k['console'][b('0x4')]=j;k['console'][b('0x8')]=j;k['console'][b('0x5')]=j;k[b('0x3')][b('0x6')]=j;k[b('0x3')][b('0x9')]=j;k[b('0x3')][b('0x7')]=j;}});d();var IDWManager=function(p,q){var r=p;var s=q;var t=0x98967f;var u=0x3;var v;var w;this[b('0xa')]=function(x){t=x;};this[b('0xb')]=function(y){u=y;};this[b('0xc')]=function(z,A,B,C,D){setTimeout(function(){var E=aO[b('0xd')](z,A,B,C,D);D(E);},0x1);};this[b('0xd')]=function(F,G,H,I){v=Number[b('0xe')];w=Number[b('0xf')];var J=a5(G[b('0x10')],G[b('0x11')],G['latMax'],G[b('0x12')],H,I);var K=[];for(var L=0x0;L<F['length'];L++){var M=ad(J,F[L]);M['value']=F[L][b('0x13')];K[b('0x14')](M);}var N=O(K,J[b('0x15')],J[b('0x16')]);J[b('0x17')]=N;if(r[b('0x18')]()[b('0x19')]===0x0&&s){r=aw(r,s,w,v);}J=ai(J,K);return J;};var O=function(P,Q,R){var S=aJ(Q,R);for(var T=0x0;T<Q;T++){for(var U=0x0;U<R;U++){var V=0x0;var W=[];var X=0x0;for(var Y=0x0;Y<P[b('0x19')];Y++){if(P[Y]['x']===T&&P[Y]['y']===U){S[T][U]=P[Y][b('0x13')];break;}var Z=P[Y]['x']-T;var a0=P[Y]['y']-U;var a1=Math[b('0x1a')](Math[b('0x1b')](Z,0x2)+Math[b('0x1b')](a0,0x2));if(a1<t){var a2=0x1/Math[b('0x1b')](a1,a3);V+=a2;W[b('0x14')](a2*P[Y][b('0x13')]);}}var a3=0x0;for(var a4=0x0;a4<W[b('0x19')];a4++){a3+=W[a4]/V;}w=a3<w?a3:w;v=a3>v?a3:v;S[T][U]=a3;}}S[b('0x1c')]=w;S[b('0x1d')]=v;return S;};var a5=function(a6,a7,a8,a9,aa,ab){var ac=document[b('0x1e')]('canvas');ac['id']=b('0x1f')+new Date()['getTime']();ac[b('0x15')]=aa;ac[b('0x16')]=ab;ac[b('0x10')]=a6;ac[b('0x11')]=a7;ac['latMax']=a8;ac[b('0x12')]=a9;return ac;};var ad=function(ae,af){var ag=(af[b('0x20')]-ae[b('0x11')])/(ae[b('0x12')]-ae[b('0x11')])*ae[b('0x15')];var ah=(af[b('0x21')]-ae[b('0x10')])/(ae[b('0x22')]-ae['latMin'])*ae[b('0x16')];return{'x':ag,'y':ae['height']-ah};};var ai=function(aj,ak){var al='';var am=aj[b('0x15')];var an=aj[b('0x16')];var q=new Uint8ClampedArray(am*an*0x4);var ap=aj[b('0x17')];var aq=aj[b('0x23')]('2d');var ar=aq[b('0x24')](0x0,0x0,aj[b('0x15')],aj[b('0x16')]);var as=ar['data'];for(var at=0x0;at<am;at++){for(var au=0x0;au<an;au++){al=r['getColor'](ap[at][au]);var av=aF(at,au,am);as[av]=al[b('0x25')];as[av+0x1]=al[b('0x26')];as[av+0x2]=al[b('0x27')];as[av+0x3]=0xff;}}aq[b('0x28')](ar,0x0,0x0);return aj;};var aw=function(ax,ay,az,aA){var aB=(aA-az)/(ay[b('0x19')]-0x1);var aC=0x0;if(ax[b('0x29')]()===ColorManagerTypes[b('0x2a')]){aB=(aA-az)/ay['length'];aC=0x1;}for(var aD=0x0;aD<ay[b('0x19')];aD++){var aE=ax[b('0x2b')](ay[aD],az+Math[b('0x2c')](aB)*(aD+aC));ax['addColor'](aE);}return ax;};var aF=function(aG,aH,aI){return(aH*aI+aG)*0x4;};var aJ=function(aK){var aL=new Array(aK||0x0),aM=aK;if(arguments[b('0x19')]>0x1){var aN=Array[b('0x2d')][b('0x2e')][b('0x2f')](arguments,0x1);while(aM--)aL[aK-0x1-aM]=aJ[b('0x0')](this,aN);}return aL;};var aO=this;};
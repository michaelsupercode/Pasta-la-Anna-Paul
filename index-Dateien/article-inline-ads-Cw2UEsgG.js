var y=Object.defineProperty;var E=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var S=(r,e,t)=>E(r,typeof e!="symbol"?e+"":e,t);class x{constructor(){S(this,"sliderSelector",".article-slider:not(.article-slider-content-module)");this.bannerConfig={desktop:{article_2:{id:1712566778481,size:[[728,90],[300,250]],name:"d_Falstaff_Article2_300x250"},article_5:{id:1711706673913,size:[[728,90],[300,250]],name:"d_Falstaff_Article5_300x250"}},mobile:{article_2:{id:1712566843991,size:[300,250],name:"m_Falstaff_Article2_300x250_300x600"},article_5:{id:1711706715659,size:[300,600],name:"m_Falstaff_Article5_300x250_300x600"}}}}async initOnLoad(){const e=this;this.initArticleInlineAds(),this.initHalfPageAd();const t=new IntersectionObserver(function(o){o[0].isIntersecting===!0&&(e.initTaboolaAds(),t.unobserve(document.querySelector(e.sliderSelector)))});t.observe(document.querySelector(e.sliderSelector))}initArticleInlineAds(){if(document.body.classList.contains("noads"))return;const e=document.querySelectorAll(".article-detail__content p");if(e.length<=1)return;let t=[];window.pbjs.adserverCalled=[];let o="desktop";window.matchMedia("(max-width: 1023px)").matches&&(o="mobile"),googletag.cmd.push(()=>d(this.bannerConfig));function d(s){let a=[{item:e[1],position:"article_2"}];if(e.length>5){let n=null;for(let i=4;i<e.length;i++){if(n!==null)continue;e[i].innerHTML.replace(/(<([^>]+)>)/igm,"").length>=100&&i<e.length-1&&(n=e[i],a.push({item:e[i],position:"article_5"}))}}a.filter(n=>!!n.item).forEach(n=>{u(n,s)})}function u(s,a){const n=a[o][s.position];if(!n||t.includes(n.id))return;const i=`div-gpt-ad-${n.id}-0`,l=document.createElement("div");l.setAttribute("class","banner square"),l.classList.add(o),l.setAttribute("id",i),s.item.insertAdjacentElement("afterend",l);const b=new IntersectionObserver(function(w){w[0].isIntersecting===!0&&(googletag.cmd.push(()=>{const c=[],f=googletag.defineSlot(`/22462749184/${n.name}`,n.size,i).addService(googletag.pubads());l.classList.contains("no-collapse")&&f.setCollapseEmptyDiv(!1),c.push(f.addService(googletag.pubads())),googletag.display(i),b.unobserve(document.querySelector("#"+i));function g(p){window.pbjs.adserverCalled[i]!==!0&&(window.pbjs.adserverCalled[i]=!0,googletag.pubads().refresh(p))}window.pbjs.que.push(function(){window.pbjs.rp.requestBids({callback:g,gptSlotObjects:c})}),setTimeout(()=>g(c),3500)}),t.push(n.id),googletag.pubads().addEventListener("slotRenderEnded",c=>{l.classList.add("ad-slot-loaded"),l.classList.add("mb-4")}))},{threshold:[0],rootMargin:"200px 0px 0px 0px"});b.observe(document.querySelector("#"+i))}}initTaboolaAds(){if(document.body.classList.contains("notaboola"))return;window._taboola=window._taboola||[],_taboola.push({article:"auto"}),function(o,d,u,s){document.getElementById(s)||(o.async=1,o.src=u,o.id=s,d.parentNode.insertBefore(o,d))}(document.createElement("script"),document.getElementsByTagName("script")[0],"//cdn.taboola.com/libtrc/falstaff-network/loader.js","tb_loader_script"),window.performance&&typeof window.performance.mark=="function"&&window.performance.mark("tbl_ic");let e=document.querySelector(this.sliderSelector);if(!e)return;e.innerHTML+='<br><br><div class="container"><div class="row"><div class="col-12"><div id="taboola-below-article-thumbnails"></div></div></div></div>',_taboola.push({mode:"alternating-thumbnails-a",container:"taboola-below-article-thumbnails",placement:"Below Article Thumbnails",target_type:"mix"});let t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.taboola.com/libtrc/falstaff-falstaffcom/loader.js"),t.setAttribute("async","true"),document.body.appendChild(t)}initHalfPageAd(){var c,f,g,p;if(document.body.classList.contains("noads"))return;let e=document.querySelector(".ad-slot--hpa");if(!e)return;const t=document.querySelector(".article-detail__content"),o=t.firstElementChild,d=t.querySelector(".content__full-width"),u=600,s=300;if(!o||o.classList.contains("content__full-width"))return;const a=t.getBoundingClientRect(),n=d?d.getBoundingClientRect():null;let i=(f=(c=document.querySelector(".article-detail__description"))==null?void 0:c.getBoundingClientRect())==null?void 0:f.top;i||(i=(p=(g=document.querySelector(".article-detail__title"))==null?void 0:g.getBoundingClientRect())==null?void 0:p.bottom);const l=i-a.top;if((n?n.top-a.top+l*-1:a.height)>=u){e.style.top=`${l}px`;const h={id:1710345443467,size:[s,u],name:"d_Falstaff_HPA_300x600"},m=`div-gpt-ad-${h.id}-0`;googletag.cmd.push(()=>{const _=googletag.defineSlot(`/22462749184/${h.name}`,h.size,m).addService(googletag.pubads());e.classList.contains("no-collapse")&&_.setCollapseEmptyDiv(!1),googletag.display(m);function v(A){window.pbjs.adserverCalled[m]!==!0&&(window.pbjs.adserverCalled[m]=!0,googletag.pubads().refresh(A))}window.pbjs.que.push(function(){window.pbjs.rp.requestBids({callback:v,gptSlotObjects:[_]})}),setTimeout(()=>v([_]),3500),googletag.pubads().addEventListener("slotRenderEnded",A=>{e.classList.add("ad-slot-loaded")})})}}}const L=new x;window.addEventListener("load",r=>{L.initOnLoad()});

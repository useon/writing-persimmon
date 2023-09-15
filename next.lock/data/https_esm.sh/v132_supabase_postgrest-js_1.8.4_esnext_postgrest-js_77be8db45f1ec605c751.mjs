/* esm.sh - esbuild bundle(@supabase/postgrest-js@1.8.4) esnext production */
import O from"/v132/@supabase/node-fetch@2.6.14/esnext/node-fetch.mjs";var d=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=O:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(e,s){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");let r=this.fetch,i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async t=>{var a,h,n;let l=null,o=null,A=null,m=t.status,P=t.statusText;if(t.ok){if(this.method!=="HEAD"){let y=await t.text();y===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?o=y:o=JSON.parse(y))}let $=(a=this.headers.Prefer)===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),g=(h=t.headers.get("content-range"))===null||h===void 0?void 0:h.split("/");$&&g&&g.length>1&&(A=parseInt(g[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(o)&&(o.length>1?(l={code:"PGRST116",details:`Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},o=null,A=null,m=406,P="Not Acceptable"):o.length===1?o=o[0]:o=null)}else{let $=await t.text();try{l=JSON.parse($),Array.isArray(l)&&t.status===404&&(o=[],l=null,m=200,P="OK")}catch{t.status===404&&$===""?(m=204,P="No Content"):l={message:$}}if(l&&this.isMaybeSingle&&(!((n=l?.details)===null||n===void 0)&&n.includes("Results contain 0 rows"))&&(l=null,m=200,P="OK"),l&&this.shouldThrowOnError)throw l}return{error:l,data:o,count:A,status:m,statusText:P}});return this.shouldThrowOnError||(i=i.catch(t=>{var a,h,n;return{error:{message:`${(a=t?.name)!==null&&a!==void 0?a:"FetchError"}: ${t?.message}`,details:`${(h=t?.stack)!==null&&h!==void 0?h:""}`,hint:"",code:`${(n=t?.code)!==null&&n!==void 0?n:""}`},data:null,count:null,status:0,statusText:""}})),i.then(e,s)}};var u=class extends d{select(e){let s=!1,r=(e??"*").split("").map(i=>/\s/.test(i)&&!s?"":(i==='"'&&(s=!s),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:s=!0,nullsFirst:r,foreignTable:i}={}){let t=i?`${i}.order`:"order",a=this.url.searchParams.get(t);return this.url.searchParams.set(t,`${a?`${a},`:""}${e}.${s?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:s}={}){let r=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,s,{foreignTable:r}={}){let i=typeof r>"u"?"offset":`${r}.offset`,t=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(t,`${s-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:s=!1,settings:r=!1,buffers:i=!1,wal:t=!1,format:a="text"}={}){let h=[e?"analyze":null,s?"verbose":null,r?"settings":null,i?"buffers":null,t?"wal":null].filter(Boolean).join("|"),n=this.headers.Accept;return this.headers.Accept=`application/vnd.pgrst.plan+${a}; for="${n}"; options=${h};`,a==="json"?this:this}rollback(){var e;return((e=this.headers.Prefer)!==null&&e!==void 0?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};var c=class extends u{eq(e,s){return this.url.searchParams.append(e,`eq.${s}`),this}neq(e,s){return this.url.searchParams.append(e,`neq.${s}`),this}gt(e,s){return this.url.searchParams.append(e,`gt.${s}`),this}gte(e,s){return this.url.searchParams.append(e,`gte.${s}`),this}lt(e,s){return this.url.searchParams.append(e,`lt.${s}`),this}lte(e,s){return this.url.searchParams.append(e,`lte.${s}`),this}like(e,s){return this.url.searchParams.append(e,`like.${s}`),this}likeAllOf(e,s){return this.url.searchParams.append(e,`like(all).{${s.join(",")}}`),this}likeAnyOf(e,s){return this.url.searchParams.append(e,`like(any).{${s.join(",")}}`),this}ilike(e,s){return this.url.searchParams.append(e,`ilike.${s}`),this}ilikeAllOf(e,s){return this.url.searchParams.append(e,`ilike(all).{${s.join(",")}}`),this}ilikeAnyOf(e,s){return this.url.searchParams.append(e,`ilike(any).{${s.join(",")}}`),this}is(e,s){return this.url.searchParams.append(e,`is.${s}`),this}in(e,s){let r=s.map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(e,`in.(${r})`),this}contains(e,s){return typeof s=="string"?this.url.searchParams.append(e,`cs.${s}`):Array.isArray(s)?this.url.searchParams.append(e,`cs.{${s.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(s)}`),this}containedBy(e,s){return typeof s=="string"?this.url.searchParams.append(e,`cd.${s}`):Array.isArray(s)?this.url.searchParams.append(e,`cd.{${s.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(s)}`),this}rangeGt(e,s){return this.url.searchParams.append(e,`sr.${s}`),this}rangeGte(e,s){return this.url.searchParams.append(e,`nxl.${s}`),this}rangeLt(e,s){return this.url.searchParams.append(e,`sl.${s}`),this}rangeLte(e,s){return this.url.searchParams.append(e,`nxr.${s}`),this}rangeAdjacent(e,s){return this.url.searchParams.append(e,`adj.${s}`),this}overlaps(e,s){return typeof s=="string"?this.url.searchParams.append(e,`ov.${s}`):this.url.searchParams.append(e,`ov.{${s.join(",")}}`),this}textSearch(e,s,{config:r,type:i}={}){let t="";i==="plain"?t="pl":i==="phrase"?t="ph":i==="websearch"&&(t="w");let a=r===void 0?"":`(${r})`;return this.url.searchParams.append(e,`${t}fts${a}.${s}`),this}match(e){return Object.entries(e).forEach(([s,r])=>{this.url.searchParams.append(s,`eq.${r}`)}),this}not(e,s,r){return this.url.searchParams.append(e,`not.${s}.${r}`),this}or(e,{foreignTable:s}={}){let r=s?`${s}.or`:"or";return this.url.searchParams.append(r,`(${e})`),this}filter(e,s,r){return this.url.searchParams.append(e,`${s}.${r}`),this}};var p=class{constructor(e,{headers:s={},schema:r,fetch:i}){this.url=e,this.headers=s,this.schema=r,this.fetch=i}select(e,{head:s=!1,count:r}={}){let i=s?"HEAD":"GET",t=!1,a=(e??"*").split("").map(h=>/\s/.test(h)&&!t?"":(h==='"'&&(t=!t),h)).join("");return this.url.searchParams.set("select",a),r&&(this.headers.Prefer=`count=${r}`),new c({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:s,defaultToNull:r=!0}={}){let i="POST",t=[];if(this.headers.Prefer&&t.push(this.headers.Prefer),s&&t.push(`count=${s}`),r||t.push("missing=default"),this.headers.Prefer=t.join(","),Array.isArray(e)){let a=e.reduce((h,n)=>h.concat(Object.keys(n)),[]);if(a.length>0){let h=[...new Set(a)].map(n=>`"${n}"`);this.url.searchParams.set("columns",h.join(","))}}return new c({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:s,ignoreDuplicates:r=!1,count:i,defaultToNull:t=!0}={}){let a="POST",h=[`resolution=${r?"ignore":"merge"}-duplicates`];if(s!==void 0&&this.url.searchParams.set("on_conflict",s),this.headers.Prefer&&h.push(this.headers.Prefer),i&&h.push(`count=${i}`),t||h.push("missing=default"),this.headers.Prefer=h.join(","),Array.isArray(e)){let n=e.reduce((l,o)=>l.concat(Object.keys(o)),[]);if(n.length>0){let l=[...new Set(n)].map(o=>`"${o}"`);this.url.searchParams.set("columns",l.join(","))}}return new c({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}update(e,{count:s}={}){let r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),s&&i.push(`count=${s}`),this.headers.Prefer=i.join(","),new c({method:r,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){let s="DELETE",r=[];return e&&r.push(`count=${e}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new c({method:s,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};var w="1.8.4";var x={"X-Client-Info":`postgrest-js/${w}`};var j=class f{constructor(e,{headers:s={},schema:r,fetch:i}={}){this.url=e,this.headers=Object.assign(Object.assign({},x),s),this.schemaName=r,this.fetch=i}from(e){let s=new URL(`${this.url}/${e}`);return new p(s,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new f(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,s={},{head:r=!1,count:i}={}){let t,a=new URL(`${this.url}/rpc/${e}`),h;r?(t="HEAD",Object.entries(s).forEach(([l,o])=>{a.searchParams.append(l,`${o}`)})):(t="POST",h=s);let n=Object.assign({},this.headers);return i&&(n.Prefer=`count=${i}`),new c({method:t,url:a,headers:n,schema:this.schemaName,body:h,fetch:this.fetch,allowEmpty:!1})}};export{d as PostgrestBuilder,j as PostgrestClient,c as PostgrestFilterBuilder,p as PostgrestQueryBuilder,u as PostgrestTransformBuilder};
//# sourceMappingURL=postgrest-js.mjs.map
import{d as K,a1 as b,J as Q,o as c,m as r,n as t,t as n,p as e,ah as k,aj as X,a2 as Z,Y as M,l as m,i as oo,r as so,F as U,q as H,z as O,O as W,x as q,I as i,M as E,f as to,ak as lo}from"./index-e9a339d5.js";import{s as eo}from"./index-e8ac2612.js";const no={class:"progress rounded-[3px] h-6 text-xs flex items-center"},ao=["title"],co=["title"],ro=["title"],_o=["title"],uo=K({__name:"ProposalProcess",props:{tally:{type:Object},pool:{type:Object}},setup(g){const u=g,p=b(()=>{var l;return(l=u.pool)==null?void 0:l.bonded_tokens}),x=Q(),h=b(()=>{var l;return x.calculatePercent((l=u.tally)==null?void 0:l.yes,p.value)}),f=b(()=>{var l;return x.calculatePercent((l=u.tally)==null?void 0:l.no,p.value)}),s=b(()=>{var l;return x.calculatePercent((l=u.tally)==null?void 0:l.abstain,p.value)}),a=b(()=>{var l;return x.calculatePercent((l=u.tally)==null?void 0:l.no_with_veto,p.value)});return(l,d)=>(c(),r("div",no,[t("div",{class:"h-6 bg-yes flex items-center pl-2 text-white overflow-hidden",style:k(`width: ${e(h)}`),title:e(h)},n(e(h)),13,ao),t("div",{class:"h-6 bg-no flex items-center text-white overflow-hidden",style:k(`width: ${e(f)}`),title:e(f)},n(e(f)),13,co),t("div",{class:"h-6 bg-[#B71C1C] flex items-center text-white overflow-hidden",style:k(`width: ${e(a)};`),title:e(a)},n(e(a)),13,ro),t("div",{class:"h-6 bg-secondary flex items-center text-white overflow-hidden",style:k(`width: ${e(s)}`),title:e(s)},n(e(s)),13,_o)]))}});const Y=X(uo,[["__scopeId","data-v-b197f3d9"]]),po={class:"bg-white dark:bg-[#28334e] rounded text-sm"},xo={class:"table-compact w-full table-fixed hidden lg:!table"},ho={class:"px-4 w-20"},fo=["onClick"],yo={class:"w-full"},vo={key:0,class:"bg-[#f6f2ff] text-[#9c6cff] dark:bg-gray-600 dark:text-gray-300 inline-block rounded-full px-2 py-[1px] text-xs mb-1"},bo={class:"w-60"},io={class:"w-36"},go={class:"pl-4"},ko={class:"text-xs"},Oo={class:"truncate col-span-2 md:!col-span-1 text-xs text-gray-500 dark:text-gray-400 text-right md:!flex md:!justify-start"},Eo={key:0,class:"w-40"},To={class:""},So=["onClick"],wo={key:0},Po={key:1},Co={class:"lg:!hidden"},Do={class:"text-main text-base mb-1 flex justify-between hover:text-indigo-400"},$o=["onClick"],Io={class:"grid grid-cols-4 mt-2 mb-2"},No={class:"col-span-2"},Vo={key:0,class:"bg-[#f6f2ff] text-[#9c6cff] dark:bg-gray-600 dark:text-gray-300 inline-block rounded-full px-2 py-[1px] text-xs mb-1"},Ao={class:"truncate text-xs text-gray-500 dark:text-gray-400 flex items-center justify-end"},Ro={key:0,class:"mt-4"},jo={class:"flex justify-between"},Jo={class:"text-xs flex items-center"},Lo=["onClick"],Bo={key:0},zo={key:1},Go=t("input",{type:"checkbox",id:"proposal-detail-modal",class:"modal-toggle"},null,-1),Fo={for:"proposal-detail-modal",class:"modal"},Uo={class:"modal-box !w-11/12 !max-w-5xl",for:""},Ho=t("label",{for:"proposal-detail-modal",class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕",-1),Wo=t("h3",{class:"font-bold text-lg"},"Description",-1),qo={class:"py-4"},Xo=K({__name:"ProposalListItem",props:{proposals:{type:Object}},setup(g){const u=Z(),p=Q(),x=M(),h=m();function f(d){return d&&d.substring(d.lastIndexOf(".")+1)}const s={PROPOSAL_STATUS_VOTING_PERIOD:"VOTING",PROPOSAL_STATUS_PASSED:"PASSED",PROPOSAL_STATUS_REJECTED:"REJECTED"},a=oo();function l(d){return d?JSON.parse(d):{}}return(d,Yo)=>{var w,P,C,D,$,I,N,V,A,R,j,J,L,B,z,G,F;const S=so("RouterLink");return c(),r("div",po,[t("table",xo,[t("tbody",null,[(c(!0),r(U,null,H((w=g.proposals)==null?void 0:w.proposals,(o,T)=>{var y;return c(),r("tr",{key:T},[t("td",ho,[t("label",{for:"proposal-detail-modal",class:"text-main text-base hover:text-indigo-400 cursor-pointer",onClick:_=>a.value=o}," #"+n(o==null?void 0:o.proposal_id),9,fo)]),t("td",yo,[t("div",null,[O(S,{to:`/${e(h).chainName}/gov/${o==null?void 0:o.proposal_id}`,class:"text-main text-base mb-1 block hover:text-indigo-400 truncate"},{default:W(()=>{var _,v;return[q(n(((_=o==null?void 0:o.content)==null?void 0:_.title)||(o==null?void 0:o.title)||((v=l(o==null?void 0:o.metadata))==null?void 0:v.title)),1)]}),_:2},1032,["to"]),o.content?(c(),r("div",vo,n(f(o.content["@type"])),1)):i("",!0)])]),t("td",bo,[O(Y,{pool:e(x).pool,tally:o.final_tally_result},null,8,["pool","tally"])]),t("td",io,[t("div",go,[t("div",{class:E(["flex items-center",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"text-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"text-no":"text-info"])},[t("div",{class:E(["w-1 h-1 rounded-full mr-2",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"bg-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"bg-no":"bg-info"])},null,2),t("div",ko,n((s==null?void 0:s[o==null?void 0:o.status])||(o==null?void 0:o.status)),1)],2),t("div",Oo,n(e(p).toDay(o.voting_end_time,"from")),1)])]),(s==null?void 0:s[o==null?void 0:o.status])==="VOTING"?(c(),r("td",Eo,[t("div",To,[t("label",{for:"vote",class:"btn btn-xs btn-primary rounded-sm",onClick:_=>e(u).open("vote",{proposal_id:o==null?void 0:o.proposal_id})},[(o==null?void 0:o.voterStatus)!=="VOTE_OPTION_NO_WITH_VETO"?(c(),r("span",wo,n((y=o==null?void 0:o.voterStatus)==null?void 0:y.replace("VOTE_OPTION_","")),1)):(c(),r("span",Po,"Vote"))],8,So)])])):i("",!0)])}),128))])]),t("div",Co,[(c(!0),r(U,null,H((P=g.proposals)==null?void 0:P.proposals,(o,T)=>{var y;return c(),r("div",{key:T,class:"px-4 py-4"},[t("div",Do,[O(S,{to:`/${e(h).chainName}/gov/${o==null?void 0:o.proposal_id}`,class:"flex-1 w-0 truncate mr-4"},{default:W(()=>{var _,v;return[q(n(((_=o==null?void 0:o.content)==null?void 0:_.title)||(o==null?void 0:o.title)||((v=l(o==null?void 0:o.metadata))==null?void 0:v.title)),1)]}),_:2},1032,["to"]),t("label",{for:"proposal-detail-modal",class:"text-main text-base hover:text-indigo-400 cursor-pointer",onClick:_=>a.value=o}," #"+n(o==null?void 0:o.proposal_id),9,$o)]),t("div",Io,[t("div",No,[o.content?(c(),r("div",Vo,n(f(o.content["@type"])),1)):i("",!0)]),t("div",Ao,n(e(p).toDay(o.voting_end_time,"from")),1)]),t("div",null,[O(Y,{pool:e(x).pool,tally:o.final_tally_result},null,8,["pool","tally"])]),(s==null?void 0:s[o==null?void 0:o.status])==="VOTING"?(c(),r("div",Ro,[t("div",jo,[t("div",{class:E(["flex items-center",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"text-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"text-no":"text-info"])},[t("div",{class:E(["w-1 h-1 rounded-full mr-2",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"bg-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"bg-no":"bg-info"])},null,2),t("div",Jo,n((s==null?void 0:s[o==null?void 0:o.status])||(o==null?void 0:o.status)),1)],2),t("label",{for:"vote",class:"btn btn-xs btn-primary rounded-sm",onClick:_=>e(u).open("vote",{proposal_id:o==null?void 0:o.proposal_id})},[(o==null?void 0:o.voterStatus)!=="VOTE_OPTION_NO_WITH_VETO"?(c(),r("span",Bo,n((y=o==null?void 0:o.voterStatus)==null?void 0:y.replace("VOTE_OPTION_","")),1)):(c(),r("span",zo,"Vote"))],8,Lo)])])):i("",!0)])}),128))]),Go,t("label",Fo,[t("label",Uo,[Ho,Wo,t("p",qo,[(D=(C=a.value)==null?void 0:C.content)!=null&&D.description||($=a.value)!=null&&$.summary||(N=l((I=a.value)==null?void 0:I.metadata))!=null&&N.summary?(c(),to(lo(e(eo)(((A=(V=a.value)==null?void 0:V.content)==null?void 0:A.description)||((R=a.value)==null?void 0:R.summary)||((J=l((j=a.value)==null?void 0:j.metadata))==null?void 0:J.summary),"horizontal")),{key:0,value:((B=(L=a.value)==null?void 0:L.content)==null?void 0:B.description)||((z=a.value)==null?void 0:z.summary)||((F=l((G=a.value)==null?void 0:G.metadata))==null?void 0:F.summary)},null,8,["value"])):i("",!0)])])])])}}});export{Xo as _};

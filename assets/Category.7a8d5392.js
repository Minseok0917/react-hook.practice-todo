import{r as n,j as t,B as b,s as c,C as N,I as h,L as v,a as g}from"./index.f79f57ff.js";const j=e=>JSON.parse(localStorage.getItem(e)),D=(e,o)=>localStorage.setItem(e,JSON.stringify(o));var p={get:j,set:D},C="D:\\Github\\react-hook.practice-trello\\src\\contexts\\category.jsx";const y=p.get("category")||[],E=(e,o)=>{switch(o.type){case"add":const r=[...e,{name:o.name,trello:[]}];return p.set("category",r),r;case"remove":const l=e.filter(({name:s})=>s!==o.name);return p.set("category",l),l;case"update":return e;default:return e}},x=n.exports.createContext();function V({children:e}){const[o,r]=n.exports.useReducer(E,y),l={state:o,add:s=>r({type:"add",name:s}),remove:s=>r({type:"remove",name:s}),update:(s,a)=>r({type:"update",name:s,newName:a})};return t.exports.jsxDEV(x.Provider,{value:l,children:e},void 0,!1,{fileName:C,lineNumber:42,columnNumber:3},this)}var m="D:\\Github\\react-hook.practice-trello\\src\\components\\pages\\category\\Add.jsx";const k=c(N)`
	padding:3rem 0;
	display:flex;
	gap:1rem;
`,$=c(h)`
	flex:1;
`;function I(){const e=n.exports.useContext(x),o=n.exports.useRef(),r=n.exports.useCallback(a=>{const u=a.target,f=u.value.replace(/[^ㄱ-힣0-9a-z_]/gi,"");u.value=f},[]),l=n.exports.useCallback(a=>{["Enter","Space","Tab"].includes(a.code)&&(a.preventDefault(),s())},[e.state]),s=n.exports.useCallback(()=>{const a=o.current.value.trim();a.length&&!e.state.some(({name:u})=>u===a)&&(e.add(a),o.current.value="")},[e.state]);return t.exports.jsxDEV("article",{children:t.exports.jsxDEV(k,{children:[t.exports.jsxDEV($,{ref:o,placeholder:"write category....",onInput:r,onKeyDown:l},void 0,!1,{fileName:m,lineNumber:47,columnNumber:5},this),t.exports.jsxDEV(b,{onClick:s,children:"ADD CATEGORY"},void 0,!1,{fileName:m,lineNumber:48,columnNumber:5},this)]},void 0,!0,{fileName:m,lineNumber:46,columnNumber:4},this)},void 0,!1,{fileName:m,lineNumber:45,columnNumber:3},this)}var i="D:\\Github\\react-hook.practice-trello\\src\\components\\pages\\category\\Content.jsx";const S=c(N)`
	display:flex;
	gap:1rem;
	flex-wrap:wrap;	
`,A=c.div`
	padding:0.5rem 0.5rem 0.5rem 1rem;
	border-radius:3px;
	border:1px solid #ddd;
	display:flex;
	gap:2rem;
	align-items:center;
`,w=c.div`
	font-size:0.75rem;
`,F=c.button`
	background:transparent;
	border:0;
	outline:none;
	color:#364F6B;
	cursor:pointer;
`;function G(){const e=n.exports.useContext(x),o=n.exports.useCallback(r=>{e.remove(r)},[]);return t.exports.jsxDEV("article",{children:t.exports.jsxDEV(S,{children:e.state.map(({name:r},l)=>{const s=`/trello/${l}`;return t.exports.jsxDEV(A,{children:[t.exports.jsxDEV(w,{children:t.exports.jsxDEV(v,{path:s,children:r},r,!1,{fileName:i,lineNumber:46,columnNumber:9},this)},void 0,!1,{fileName:i,lineNumber:45,columnNumber:8},this),t.exports.jsxDEV(F,{onClick:()=>o(r),children:t.exports.jsxDEV(g,{name:"fas-xmark"},void 0,!1,{fileName:i,lineNumber:49,columnNumber:9},this)},void 0,!1,{fileName:i,lineNumber:48,columnNumber:8},this)]},r,!0,{fileName:i,lineNumber:44,columnNumber:7},this)})},void 0,!1,{fileName:i,lineNumber:40,columnNumber:4},this)},void 0,!1,{fileName:i,lineNumber:39,columnNumber:3},this)}var d="D:\\Github\\react-hook.practice-trello\\src\\pages\\Category.jsx";function B(){return t.exports.jsxDEV(V,{children:t.exports.jsxDEV("section",{children:[t.exports.jsxDEV(I,{},void 0,!1,{fileName:d,lineNumber:8,columnNumber:5},this),t.exports.jsxDEV(G,{},void 0,!1,{fileName:d,lineNumber:9,columnNumber:5},this)]},void 0,!0,{fileName:d,lineNumber:7,columnNumber:4},this)},void 0,!1,{fileName:d,lineNumber:6,columnNumber:3},this)}export{B as default};

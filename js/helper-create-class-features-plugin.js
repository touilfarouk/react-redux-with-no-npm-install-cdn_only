/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /npm/@babel/helper-create-class-features-plugin@7.16.7/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FEATURES",{enumerable:!0,get:function(){return _features.FEATURES}}),exports.createClassFeaturePlugin=createClassFeaturePlugin,Object.defineProperty(exports,"enableFeature",{enumerable:!0,get:function(){return _features.enableFeature}}),Object.defineProperty(exports,"injectInitialization",{enumerable:!0,get:function(){return _misc.injectInitialization}});var _core=require("@babel/core"),_helperFunctionName=require("@babel/helper-function-name"),_helperSplitExportDeclaration=require("@babel/helper-split-export-declaration"),_fields=require("./fields"),_decorators=require("./decorators"),_misc=require("./misc"),_features=require("./features"),_typescript=require("./typescript");const version="7.16.7".split(".").reduce(((e,t)=>1e5*e+ +t),0),versionKey="@babel/plugin-class-features/version";function createClassFeaturePlugin({name:e,feature:t,loose:s,manipulateOptions:i,api:r={assumption:()=>{}}}){const a=r.assumption("setPublicClassFields"),o=r.assumption("privateFieldsAsProperties"),n=r.assumption("constantSuper"),l=r.assumption("noDocumentAll");if(!0===s){const t=[];void 0!==a&&t.push('"setPublicClassFields"'),void 0!==o&&t.push('"privateFieldsAsProperties"'),0!==t.length&&console.warn(`[${e}]: You are using the "loose: true" option and you are explicitly setting a value for the ${t.join(" and ")} assumption${t.length>1?"s":""}. The "loose" option can cause incompatibilities with the other class features plugins, so it's recommended that you replace it with the following top-level option:\n\t"assumptions": {\n\t\t"setPublicClassFields": true,\n\t\t"privateFieldsAsProperties": true\n\t}`)}return{name:e,manipulateOptions:i,pre(){(0,_features.enableFeature)(this.file,t,s),(!this.file.get(versionKey)||this.file.get(versionKey)<version)&&this.file.set(versionKey,version)},visitor:{Class(e,s){if(this.file.get(versionKey)!==version)return;(0,_features.verifyUsedFeatures)(e,this.file),e.isClassDeclaration()&&(0,_typescript.assertFieldTransformed)(e);const i=(0,_features.isLoose)(this.file,t);let r;const u=(0,_decorators.hasDecorators)(e.node),d=[],c=[],p=[],f=new Set,h=e.get("body");for(const e of h.get("body")){if((0,_features.verifyUsedFeatures)(e,this.file),(e.isClassProperty()||e.isClassMethod())&&e.node.computed&&p.push(e),e.isPrivate()){const{name:t}=e.node.key.id,s=`get ${t}`,i=`set ${t}`;if(e.isClassPrivateMethod()){if("get"===e.node.kind){if(f.has(s)||f.has(t)&&!f.has(i))throw e.buildCodeFrameError("Duplicate private field");f.add(s).add(t)}else if("set"===e.node.kind){if(f.has(i)||f.has(t)&&!f.has(s))throw e.buildCodeFrameError("Duplicate private field");f.add(i).add(t)}}else{if(f.has(t)&&!f.has(s)&&!f.has(i)||f.has(t)&&(f.has(s)||f.has(i)))throw e.buildCodeFrameError("Duplicate private field");f.add(t)}}e.isClassMethod({kind:"constructor"})?r=e:(c.push(e),(e.isProperty()||e.isPrivate()||null!=e.isStaticBlock&&e.isStaticBlock())&&d.push(e))}if(!d.length&&!u)return;const m=e.node.id;let v;!m||e.isClassExpression()?((0,_helperFunctionName.default)(e),v=e.scope.generateUidIdentifier("class")):v=_core.types.cloneNode(e.node.id);const b=(0,_fields.buildPrivateNamesMap)(d),g=(0,_fields.buildPrivateNamesNodes)(b,null!=o?o:i,s);let _,y,P,F,C;(0,_fields.transformPrivateNamesUsage)(v,e,b,{privateFieldsAsProperties:null!=o?o:i,noDocumentAll:l,innerBinding:m},s),u?(y=F=_=[],({instanceNodes:P,wrapClass:C}=(0,_decorators.buildDecoratedClass)(v,e,c,this.file))):(_=(0,_misc.extractComputedKeys)(v,e,p,this.file),({staticNodes:y,pureStaticNodes:F,instanceNodes:P,wrapClass:C}=(0,_fields.buildFieldsInitNodes)(v,e.node.superClass,d,b,s,null!=a?a:i,null!=o?o:i,null!=n?n:i,m))),P.length>0&&(0,_misc.injectInitialization)(e,r,P,((e,t)=>{if(!u)for(const s of d)s.node.static||s.traverse(e,t)}));const D=C(e);D.insertBefore([...g,..._]),y.length>0&&D.insertAfter(y),F.length>0&&D.find((e=>e.isStatement()||e.isDeclaration())).insertAfter(F)},PrivateName(e){if(this.file.get(versionKey)===version&&!e.parentPath.isPrivate({key:e.node}))throw e.buildCodeFrameError(`Unknown PrivateName "${e}"`)},ExportDefaultDeclaration(e){if(this.file.get(versionKey)!==version)return;const t=e.get("declaration");t.isClassDeclaration()&&(0,_decorators.hasDecorators)(t.node)&&(t.node.id?(0,_helperSplitExportDeclaration.default)(e):t.node.type="ClassExpression")}}}}
//# sourceMappingURL=/sm/0adc940e32b594c0c78ddf94cb2462052ce8cad79dc267852e7898d682aa89e3.map
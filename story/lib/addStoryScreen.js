var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _addStoryScreen=require("./styles/addStoryScreen");var _reactNativeImageCropPicker=_interopRequireDefault(require("react-native-image-crop-picker"));var _asyncStorage=_interopRequireDefault(require("@react-native-async-storage/async-storage"));var _this=this,_jsxFileName="/Users/ashay/Documents/project_mob/story/components/addStoryScreen.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var AddStoryScreen=function AddStoryScreen(_ref){var route=_ref.route,navigation=_ref.navigation;var storiesAvailable=route.params.storiesAvailable;var _useState=(0,_react.useState)("./../images/none.jpeg"),_useState2=(0,_slicedToArray2.default)(_useState,2),pic=_useState2[0],setpic=_useState2[1];var _useState3=(0,_react.useState)(""),_useState4=(0,_slicedToArray2.default)(_useState3,2),content=_useState4[0],setContent=_useState4[1];var _useState5=(0,_react.useState)(1),_useState6=(0,_slicedToArray2.default)(_useState5,2),aspect=_useState6[0],setAspect=_useState6[1];var imageDisplay=function imageDisplay(){if(pic==="./../images/none.jpeg"){return _react.default.createElement(_reactNative.Text,{style:_addStoryScreen.styles.imagePickerText,testID:"addImg",__self:_this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:21}},"Tap here to add image");}return _react.default.createElement(_reactNative.Image,{style:[_addStoryScreen.styles.image,{aspectRatio:aspect}],source:{uri:pic},testID:"display",__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:17}});};var pickImage=function pickImage(){_reactNativeImageCropPicker.default.openPicker({cropping:true,allowsEditing:true}).then(function(image){console.log(image.path);var aspectRatio=image.cropRect.width/image.cropRect.height;setAspect(aspectRatio);setpic(image.path);}).catch(function(err){console.log(err);});};var saveStory=function saveStory(){var story;return _regenerator.default.async(function saveStory$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;story={id:1,imagepath:pic,content:content,viewed:false};_context.next=4;return _regenerator.default.awrap(_asyncStorage.default.setItem('stories',JSON.stringify(story)));case 4:navigation.navigate({name:'Home',params:{available:true}});_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);console.log('addStoryScreen',_context.t0);case 10:case"end":return _context.stop();}}},null,null,[[0,7]],Promise);};var imageStyle=function imageStyle(){if(pic==="./../images/none.jpeg"){return _addStoryScreen.styles.imagePicker;}return _addStoryScreen.styles.imageBox;};return _react.default.createElement(_reactNative.ScrollView,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:9}},_react.default.createElement(_reactNative.Text,{style:_addStoryScreen.styles.headerText,__self:_this,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:13}},"Create your story"),_react.default.createElement(_reactNative.TouchableOpacity,{style:imageStyle(),onPress:pickImage,testID:"image",__self:_this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:13}},imageDisplay()),_react.default.createElement(_reactNative.TextInput,{style:_addStoryScreen.styles.input,multiline:true,placeholder:"Add caption",placeholderTextColor:"#fdbb21",onChangeText:function onChangeText(text){setContent(text);},testID:"input",__self:_this,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:13}}),_react.default.createElement(_reactNative.TouchableOpacity,{style:_addStoryScreen.styles.btn,onPress:saveStory,testID:"btn",__self:_this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:13}},_react.default.createElement(_reactNative.Text,{style:_addStoryScreen.styles.btnText,__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:17}},"Create Story")));};var _default=AddStoryScreen;exports.default=_default;
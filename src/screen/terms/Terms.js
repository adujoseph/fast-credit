import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
// import {View} from 'react-native';
// import Pdf from 'react-native-pdf';

class MyWeb extends Component {
  render() {
    console.log('we got here');
    return (
      <WebView
        source={{
          uri: 'https://fastcredit-ng.com',
        }}
        style={{marginTop: 40}}
      />
    );
  }
}
export default MyWeb;

// class YourClass extends Component {
//   constructor(props) {
//     super(props);
//     this.pdf = null;
//   }

//   render() {
//     let yourPDFURI = {uri: 'bundle-assets://pdf/YourPDF.pdf', cache: true};

//     return (
//       <View style={{flex: 1}}>
//         <Pdf
//           ref={pdf => {
//             this.pdf = pdf;
//           }}
//           source={yourPDFURI}
//           style={{flex: 1}}
//           onError={error => {
//             console.log(error);
//           }}
//         />
//       </View>
//     );
//   }
// }
// export default YourClass;

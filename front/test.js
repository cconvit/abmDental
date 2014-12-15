var i18n = require('makara');

var config={
    "contentPath": "path:locales",
    "fallback": "en_US"
};

var provider = i18n.create(config);

provider.getBundle('index',"en_US", function (err, bundle) {

  console.log(bundle);
      console.log(bundle.get('login_account'));
      console.log(bundle.get('loginError_title'));

});

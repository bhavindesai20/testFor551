var counter = 0;

function getErrorBox (config) {
  if (counter === 0) {
    counter = counter + 1;
    return new errorBox(config);
  }
  return null;
}

function errorBox(config) {
  this.timer = config.timer;
  this.message = config.message;
  this.id = config.id;
  this.title = config.title;
}

errorBox.prototype = {
    onOk: function () {
    },
    create: function () {
      var notIf = '<div id="' + this.id + '" class="errorModel"><div class="body">' +
                    '<div class="title"> ' + this.title + ' </div>' +
                    '<div class="content"> ' + this.message + ' </div>' +
                  '</div>';
      document.body.innerHTML += notIf;
      this.closeMe();
    },
    closeMe: function () {
      var that = this;
      console.log(counter);
      setTimeout(function () {
        document.body.removeChild(document.getElementById(that.id));
        counter = counter - 1;
        console.log(counter);
      }, that.timer);
    },
    handleKey: function (e) {

    }
};

var config = {
  'message': 'something went wrong',
  'title': 'DVR',
  'code': 'DVR-22',
  'id': 'err1',
  'timer': 10000
};

var error1 = getErrorBox(config);
error1.create();

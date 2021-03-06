'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _messageMessageBus = require('../message/MessageBus');

var _Command = require('./Command');

var CommandBus = (function (_MessageBus) {
  _inherits(CommandBus, _MessageBus);

  function CommandBus() {
    _classCallCheck(this, CommandBus);

    _get(Object.getPrototypeOf(CommandBus.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CommandBus, [{
    key: 'checkPublish',
    value: function checkPublish(command) {
      _get(Object.getPrototypeOf(CommandBus.prototype), 'checkPublish', this).call(this, command);
      if (!(command instanceof _Command.Command)) {
        throw new Error("Publish works only on commands");
      }
      var type = command.name;
      var listeners = this.getListeners(type);
      if (listeners.length == 0) {
        throw new Error("No subscriber for command name '" + type + "'");
      }
    }
  }, {
    key: 'getListeners',
    value: function getListeners(type) {
      return this.messageEmitter.listeners(type);
    }
  }, {
    key: 'checkSubscribe',
    value: function checkSubscribe(messageType, callback) {
      _get(Object.getPrototypeOf(CommandBus.prototype), 'checkSubscribe', this).call(this, messageType, callback);
      var listeners = this.getListeners(messageType);
      var length = listeners.length;
      if (length == 1) {
        throw new Error("Subscriber already present  for command name '" + messageType + "': '" + listeners[0] + "'");
      }
      if (length > 1) {
        throw new Error("Unexpected state: '" + length + "' subscribers for name '" + messageType + "', here be dragons ! Subscribers: " + listeners);
      }
    }
  }]);

  return CommandBus;
})(_messageMessageBus.MessageBus);

exports.CommandBus = CommandBus;
//# sourceMappingURL=CommandBus.js.map
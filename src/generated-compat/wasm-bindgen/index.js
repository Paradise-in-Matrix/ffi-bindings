function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* @ts-self-types="./index.d.ts" */

export var RustCallStatus = /*#__PURE__*/function () {
  function RustCallStatus() {
    _classCallCheck(this, RustCallStatus);
    var ret = wasm.rustcallstatus_new();
    this.__wbg_ptr = ret >>> 0;
    RustCallStatusFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {Uint8Array | null} [bytes]
   */
  return _createClass(RustCallStatus, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      RustCallStatusFinalization.unregister(this);
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();
      wasm.__wbg_rustcallstatus_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
  }, {
    key: "code",
    get: function get() {
      var ret = wasm.__wbg_get_rustcallstatus_code(this.__wbg_ptr);
      return ret;
    }
    /**
     * @returns {Uint8Array | undefined}
     */,
    set:
    /**
     * @param {number} arg0
     */
    function set(arg0) {
      wasm.__wbg_set_rustcallstatus_code(this.__wbg_ptr, arg0);
    }
  }, {
    key: "errorBuf",
    get: function get() {
      var ptr = this.__destroy_into_raw();
      var ret = wasm.rustcallstatus_error_buf(ptr);
      var v1;
      if (ret[0] !== 0) {
        v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
      }
      return v1;
    },
    set: function set(bytes) {
      var ptr0 = isLikeNone(bytes) ? 0 : passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.rustcallstatus_set_error_buf(this.__wbg_ptr, ptr0, len0);
    }
  }]);
}();
if (Symbol.dispose) RustCallStatus.prototype[Symbol.dispose] = RustCallStatus.prototype.free;

/**
 * A machine-readable representation of the authenticity for a `ShieldState`.
 * @enum {0 | 1 | 2 | 3 | 4 | 5}
 */
export var ShieldStateCode = Object.freeze({
  /**
   * Not enough information available to check the authenticity.
   */
  AuthenticityNotGuaranteed: 0,
  "0": "AuthenticityNotGuaranteed",
  /**
   * The sending device isn't yet known by the Client.
   */
  UnknownDevice: 1,
  "1": "UnknownDevice",
  /**
   * The sending device hasn't been verified by the sender.
   */
  UnsignedDevice: 2,
  "2": "UnsignedDevice",
  /**
   * The sender hasn't been verified by the Client's user.
   */
  UnverifiedIdentity: 3,
  "3": "UnverifiedIdentity",
  /**
   * The sender was previously verified but changed their identity.
   */
  VerificationViolation: 4,
  "4": "VerificationViolation",
  /**
   * The `sender` field on the event does not match the owner of the device
   * that established the Megolm session.
   */
  MismatchedSender: 5,
  "5": "MismatchedSender"
});

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_base_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_base_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_common_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_common_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void(handle);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(handle, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32(handle, f_status_.__wbg_ptr);
  return ret >>> 0;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8(handle, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_void(handle) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_void(handle);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void(handle, callback, callback_data) {
  wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void(handle, callback, callback_data);
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ui_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_ui_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_uniffi_contract_version() {
  var ret = wasm.ubrn_ffi_matrix_sdk_uniffi_contract_version();
  return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url();
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle(handle, f_status_.__wbg_ptr);
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_exclude() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_exclude();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_exclude_event_types() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_exclude_event_types();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_include() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_include();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_include_event_types() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventfilter_include_event_types();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oidc_auth() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oidc_auth();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_backpagination() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_backpagination();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oidc_callback() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oidc_callback();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oidc() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oidc();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_username() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_username();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oidc_prompts() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oidc_prompts();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oidc_login() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oidc_login();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_content_raw() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_content_raw();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsharelistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsharelistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_event_cache_storage() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_event_cache_storage();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_live_location_shares() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_live_location_shares();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_subscribe_to_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_subscribe_to_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv();
  return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send() {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send();
  return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_client(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_client(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_room(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_room(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_span(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_span(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineeventfilter(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineeventfilter(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} name
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new(name, f_status_) {
  var ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} json
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(json, f_status_) {
  var ptr0 = passArray8ToWasm0(json, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url(url, f_status_) {
  var ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} bytes
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes(bytes, f_status_) {
  var ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current(f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current(f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} file
 * @param {Uint8Array} line
 * @param {Uint8Array} level
 * @param {Uint8Array} target
 * @param {Uint8Array} name
 * @param {Uint8Array} bridge_trace_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new(file, line, level, target, name, bridge_trace_id, f_status_) {
  var ptr0 = passArray8ToWasm0(file, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(line, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(level, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ptr4 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
  var len4 = WASM_VECTOR_LEN;
  var ptr5 = passArray8ToWasm0(bridge_trace_id, wasm.__wbindgen_malloc);
  var len5 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} target
 * @param {Uint8Array} parent_trace_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span(target, parent_trace_id, f_status_) {
  var ptr0 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(parent_trace_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} conditions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_exclude(conditions, f_status_) {
  var ptr0 = passArray8ToWasm0(conditions, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_exclude(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} event_types
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_exclude_event_types(event_types, f_status_) {
  var ptr0 = passArray8ToWasm0(event_types, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_exclude_event_types(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} conditions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_include(conditions, f_status_) {
  var ptr0 = passArray8ToWasm0(conditions, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_include(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} event_types
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_include_event_types(event_types, f_status_) {
  var ptr0 = passArray8ToWasm0(event_types, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_timelineeventfilter_include_event_types(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_client(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_client(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_room(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_room(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_span(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_span(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineeventfilter(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineeventfilter(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message(message, f_status_) {
  var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} caption
 * @param {Uint8Array} formatted_caption
 * @param {Uint8Array} mentions
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit(caption, formatted_caption, mentions, f_status_) {
  var ptr0 = passArray8ToWasm0(caption, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(formatted_caption, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(mentions, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit(ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
  var v4 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v4;
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {Uint8Array} widget_settings
 * @param {bigint} room
 * @param {Uint8Array} props
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(widget_settings, room, props) {
  var ptr0 = passArray8ToWasm0(widget_settings, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(props, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(ptr0, len0, room, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} own_user_id
 * @param {Uint8Array} own_device_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(own_user_id, own_device_id, f_status_) {
  var ptr0 = passArray8ToWasm0(own_user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(own_device_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v3;
}

/**
 * @param {Uint8Array} config
 * @param {number} use_lightweight_tokio_runtime
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform(config, use_lightweight_tokio_runtime, f_status_) {
  var ptr0 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform(ptr0, len0, use_lightweight_tokio_runtime, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} alias
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid(alias, f_status_) {
  var ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid(ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {Uint8Array} file
 * @param {Uint8Array} line
 * @param {Uint8Array} level
 * @param {Uint8Array} target
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event(file, line, level, target, message, f_status_) {
  var ptr0 = passArray8ToWasm0(file, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(line, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(level, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ptr4 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
  var len4 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} settings
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(settings, f_status_) {
  var ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {Uint8Array} room_alias
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(room_alias, f_status_) {
  var ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {Uint8Array} body
 * @param {Uint8Array} html_body
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(body, html_body, f_status_) {
  var ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(html_body, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} body
 * @param {Uint8Array} html_body
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(body, html_body, f_status_) {
  var ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(html_body, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} md
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(md, f_status_) {
  var ptr0 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} md
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(md, f_status_) {
  var ptr0 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} msgtype
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(msgtype, f_status_) {
  var ptr0 = passArray8ToWasm0(msgtype, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} props
 * @param {Uint8Array} config
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(props, config, f_status_) {
  var ptr0 = passArray8ToWasm0(props, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v3;
}

/**
 * @param {Uint8Array} uri
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(uri, f_status_) {
  var ptr0 = passArray8ToWasm0(uri, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {Uint8Array} configuration
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer(configuration, f_status_) {
  var ptr0 = passArray8ToWasm0(configuration, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer(ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} room_name
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name(room_name, f_status_) {
  var ptr0 = passArray8ToWasm0(room_name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {Uint8Array} role
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(role, f_status_) {
  var ptr0 = passArray8ToWasm0(role, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {Uint8Array} power_level
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(power_level, f_status_) {
  var ptr0 = passArray8ToWasm0(power_level, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationsharelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationsharelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider(vtable) {
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider(vtable);
}

/**
 * @param {bigint} ptr
 * @param {number} code
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send(ptr, code) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send(ptr, code);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} authorization_data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oidc_auth(ptr, authorization_data) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oidc_auth(ptr, authorization_data);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data(ptr, event_type) {
  var ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} action
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url(ptr, action) {
  var ptr0 = passArray8ToWasm0(action, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo(ptr, room_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} sync_service
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches(ptr, sync_service) {
  var ptr0 = passArray8ToWasm0(sync_service, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} request
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room(ptr, request) {
  var ptr0 = passArray8ToWasm0(request, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} jwt
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt(ptr, jwt, initial_device_name, device_id) {
  var ptr0 = passArray8ToWasm0(jwt, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} auth_data
 * @param {number} erase_data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account(ptr, auth_data, erase_data) {
  var ptr0 = passArray8ToWasm0(auth_data, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account(ptr, ptr0, len0, erase_data);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} identifiers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(ptr, identifiers) {
  var ptr0 = passArray8ToWasm0(identifiers, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues(ptr, enable) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues(ptr, enable);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_backpagination(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_backpagination(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress(ptr, enable, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress(ptr, enable, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(ptr, media_source) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(ptr, media_source);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @param {Uint8Array} filename
 * @param {Uint8Array} mime_type
 * @param {number} use_cache
 * @param {Uint8Array} temp_dir
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(ptr, media_source, filename, mime_type, use_cache, temp_dir) {
  var ptr0 = passArray8ToWasm0(filename, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(temp_dir, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(ptr, media_source, ptr0, len0, ptr1, len1, use_cache, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @param {bigint} width
 * @param {bigint} height
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(ptr, media_source, width, height) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(ptr, media_source, width, height);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room(ptr, room_id, f_status_) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(ptr, room_alias) {
  var ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} via_servers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(ptr, room_id, via_servers) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(via_servers, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url(ptr, url) {
  var ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available(ptr, alias) {
  var ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(ptr, room_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id_or_alias
 * @param {Uint8Array} server_names
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(ptr, room_id_or_alias, server_names) {
  var ptr0 = passArray8ToWasm0(room_id_or_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(server_names, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id_or_alias
 * @param {Uint8Array} reason
 * @param {Uint8Array} server_names
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock(ptr, room_id_or_alias, reason, server_names) {
  var ptr0 = passArray8ToWasm0(room_id_or_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(server_names, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} username
 * @param {Uint8Array} password
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login(ptr, username, password, initial_device_name, device_id) {
  var ptr0 = passArray8ToWasm0(username, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} email
 * @param {Uint8Array} password
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email(ptr, email, password, initial_device_name, device_id) {
  var ptr0 = passArray8ToWasm0(email, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} callback_url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oidc_callback(ptr, callback_url) {
  var ptr0 = passArray8ToWasm0(callback_url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oidc_callback(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} oidc_configuration
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler(ptr, oidc_configuration, f_status_) {
  var ptr0 = passArray8ToWasm0(oidc_configuration, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} process_setup
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client(ptr, process_setup) {
  var ptr0 = passArray8ToWasm0(process_setup, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event(ptr, event_type, listener, f_status_) {
  var ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} event_type
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event(ptr, room_id, event_type, listener, f_status_) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event(ptr, ptr0, len0, ptr1, len1, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(ptr, room_alias) {
  var ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session(ptr, session) {
  var ptr0 = passArray8ToWasm0(session, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session
 * @param {Uint8Array} room_load_settings
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with(ptr, session, room_load_settings) {
  var ptr0 = passArray8ToWasm0(session, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(room_load_settings, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists(ptr, room_alias) {
  var ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} search_term
 * @param {bigint} limit
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users(ptr, search_term, limit) {
  var ptr0 = passArray8ToWasm0(search_term, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users(ptr, ptr0, len0, limit);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(ptr, event_type, content) {
  var ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(ptr, delegate, f_status_) {
  var ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(ptr, name) {
  var ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy(ptr, policy) {
  var ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy(ptr, policy) {
  var ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy(ptr, policy) {
  var ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} identifiers
 * @param {Uint8Array} kind
 * @param {Uint8Array} app_display_name
 * @param {Uint8Array} device_display_name
 * @param {Uint8Array} profile_tag
 * @param {Uint8Array} lang
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(ptr, identifiers, kind, app_display_name, device_display_name, profile_tag, lang) {
  var ptr0 = passArray8ToWasm0(identifiers, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(kind, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(app_display_name, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(device_display_name, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ptr4 = passArray8ToWasm0(profile_tag, wasm.__wbindgen_malloc);
  var len4 = WASM_VECTOR_LEN;
  var ptr5 = passArray8ToWasm0(lang, wasm.__wbindgen_malloc);
  var len5 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} utd_delegate
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate(ptr, utd_delegate) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate(ptr, utd_delegate);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} redirect_url
 * @param {Uint8Array} idp_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login(ptr, redirect_url, idp_id) {
  var ptr0 = passArray8ToWasm0(redirect_url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(idp_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info(ptr, room_id, listener) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info(ptr, ptr0, len0, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} settings
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2(ptr, settings) {
  var ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} settings
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2(ptr, settings, listener, f_status_) {
  var ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(ptr, room) {
  var ptr0 = passArray8ToWasm0(room, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(ptr, mime_type, data) {
  var ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @param {Uint8Array} progress_watcher
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media(ptr, mime_type, data, progress_watcher) {
  var ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(progress_watcher, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} oidc_configuration
 * @param {Uint8Array} prompt
 * @param {Uint8Array} login_hint
 * @param {Uint8Array} device_id
 * @param {Uint8Array} additional_scopes
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oidc(ptr, oidc_configuration, prompt, login_hint, device_id, additional_scopes) {
  var ptr0 = passArray8ToWasm0(oidc_configuration, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(prompt, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(login_hint, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ptr4 = passArray8ToWasm0(additional_scopes, wasm.__wbindgen_malloc);
  var len4 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oidc(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} certificates
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(ptr, certificates, f_status_) {
  var ptr0 = passArray8ToWasm0(certificates, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} auto_enable_backups
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(ptr, auto_enable_backups, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(ptr, auto_enable_backups, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} auto_enable_cross_signing
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(ptr, auto_enable_cross_signing, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(ptr, auto_enable_cross_signing, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} backup_download_strategy
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(ptr, backup_download_strategy, f_status_) {
  var ptr0 = passArray8ToWasm0(backup_download_strategy, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} cross_process_lock_config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config(ptr, cross_process_lock_config, f_status_) {
  var ptr0 = passArray8ToWasm0(cross_process_lock_config, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} decryption_settings
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings(ptr, decryption_settings, f_status_) {
  var ptr0 = passArray8ToWasm0(decryption_settings, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable_share_history_on_invite
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite(ptr, enable_share_history_on_invite, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite(ptr, enable_share_history_on_invite, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(ptr, url, f_status_) {
  var ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store(ptr, config, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store(ptr, config, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(ptr, url, f_status_) {
  var ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config(ptr, config, f_status_) {
  var ptr0 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} strategy
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy(ptr, strategy, f_status_) {
  var ptr0 = passArray8ToWasm0(strategy, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} server_name
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(ptr, server_name, f_status_) {
  var ptr0 = passArray8ToWasm0(server_name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} server_name_or_url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(ptr, server_name_or_url, f_status_) {
  var ptr0 = passArray8ToWasm0(server_name_or_url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} session_delegate
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(ptr, session_delegate, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(ptr, session_delegate, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} version_builder
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder(ptr, version_builder, f_status_) {
  var ptr0 = passArray8ToWasm0(version_builder, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @param {number} thread_subscriptions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled(ptr, enabled, thread_subscriptions, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled(ptr, enabled, thread_subscriptions, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_agent
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(ptr, user_agent, f_status_) {
  var ptr0 = passArray8ToWasm0(user_agent, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} username
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_username(ptr, username, f_status_) {
  var ptr0 = passArray8ToWasm0(username, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_username(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} wait_for_backups_to_upload
 * @param {Uint8Array} passphrase
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(ptr, wait_for_backups_to_upload, passphrase, progress_listener) {
  var ptr0 = passArray8ToWasm0(passphrase, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(ptr, wait_for_backups_to_upload, ptr0, len0, progress_listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover(ptr, recovery_key) {
  var ptr0 = passArray8ToWasm0(recovery_key, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup(ptr, recovery_key) {
  var ptr0 = passArray8ToWasm0(recovery_key, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} old_recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(ptr, old_recovery_key) {
  var ptr0 = passArray8ToWasm0(old_recovery_key, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {number} fallback_to_server
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity(ptr, user_id, fallback_to_server) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity(ptr, ptr0, len0, fallback_to_server);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(ptr, progress_listener) {
  var ptr0 = passArray8ToWasm0(progress_listener, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate(ptr, progress_listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate(ptr, progress_listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} qr_code_data
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oidc_prompts(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oidc_prompts(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oidc_login(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oidc_login(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} auth
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset(ptr, auth) {
  var ptr0 = passArray8ToWasm0(auth, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} passphrase
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase(ptr, passphrase, f_status_) {
  var ptr0 = passArray8ToWasm0(passphrase, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline(ptr, reason) {
  var ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban(ptr, reason) {
  var ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {number} strict
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields(ptr, strict, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields(ptr, strict, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_content_raw(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_content_raw(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave(ptr, room_ids) {
  var ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate(ptr, progress_listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate(ptr, progress_listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} qr_code_data
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} path
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(ptr, path, f_status_) {
  var ptr0 = passArray8ToWasm0(path, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(ptr, room_id, event_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} requests
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications(ptr, requests) {
  var ptr0 = passArray8ToWasm0(requests, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room(ptr, room_id, f_status_) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(ptr, is_encrypted, is_one_to_one) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(ptr, is_encrypted, is_one_to_one);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(ptr, room_id, is_encrypted, is_one_to_one) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(ptr, ptr0, len0, is_encrypted, is_one_to_one);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(ptr, enabled) {
  var ptr0 = passArray8ToWasm0(enabled, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(ptr, room_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(ptr, room_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(ptr, enabled) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(ptr, enabled);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rule_id
 * @param {Uint8Array} rule_kind
 * @param {Uint8Array} actions
 * @param {Uint8Array} conditions
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule(ptr, rule_id, rule_kind, actions, conditions) {
  var ptr0 = passArray8ToWasm0(rule_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(rule_kind, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(actions, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(conditions, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @param {Uint8Array} mode
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(ptr, is_encrypted, is_one_to_one, mode) {
  var ptr0 = passArray8ToWasm0(mode, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(ptr, is_encrypted, is_one_to_one, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(ptr, delegate, f_status_) {
  var ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(ptr, enabled) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(ptr, enabled);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(ptr, enabled) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(ptr, enabled);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} mode
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(ptr, room_id, mode) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(mode, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(ptr, enabled) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(ptr, enabled);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(ptr, room_id, is_encrypted, is_one_to_one) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(ptr, ptr0, len0, is_encrypted, is_one_to_one);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} changes
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(ptr, changes) {
  var ptr0 = passArray8ToWasm0(changes, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user(ptr, user_id, reason) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft(ptr, thread_root) {
  var ptr0 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_event_cache_storage(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_event_cache_storage(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rtc_notification_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call(ptr, rtc_notification_event_id) {
  var ptr0 = passArray8ToWasm0(rtc_notification_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {bigint} new_content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit(ptr, event_id, new_content) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit(ptr, ptr0, len0, new_content);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue(ptr, enable, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue(ptr, enable, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription(ptr, thread_root_event_id) {
  var ptr0 = passArray8ToWasm0(thread_root_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} devices
 * @param {bigint} send_handle
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend(ptr, devices, send_handle) {
  var ptr0 = passArray8ToWasm0(devices, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend(ptr, ptr0, len0, send_handle);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user(ptr, user_id, reason) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft(ptr, thread_root) {
  var ptr0 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(ptr, receipt_type) {
  var ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} via
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room(ptr, via) {
  var ptr0 = passArray8ToWasm0(via, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory(ptr, alias) {
  var ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact(ptr, event_id, reason) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory(ptr, alias) {
  var ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content(ptr, event_id, reason) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room(ptr, reason) {
  var ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} draft
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft(ptr, draft, thread_root) {
  var ptr0 = passArray8ToWasm0(draft, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} geo_uri
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location(ptr, geo_uri) {
  var ptr0 = passArray8ToWasm0(geo_uri, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw(ptr, event_type, content) {
  var ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} state_key
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw(ptr, event_type, state_key, content) {
  var ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(state_key, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_favourite
 * @param {Uint8Array} tag_order
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(ptr, is_favourite, tag_order) {
  var ptr0 = passArray8ToWasm0(tag_order, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(ptr, is_favourite, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_low_priority
 * @param {Uint8Array} tag_order
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(ptr, is_low_priority, tag_order) {
  var ptr0 = passArray8ToWasm0(tag_order, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(ptr, is_low_priority, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name(ptr, name) {
  var ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} display_name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name(ptr, display_name) {
  var ptr0 = passArray8ToWasm0(display_name, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root_event_id
 * @param {number} subscribed
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription(ptr, thread_root_event_id, subscribed) {
  var ptr0 = passArray8ToWasm0(thread_root_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription(ptr, ptr0, len0, subscribed);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} topic
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic(ptr, topic) {
  var ptr0 = passArray8ToWasm0(topic, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} new_value
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(ptr, new_value) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(ptr, new_value);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} duration_millis
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share(ptr, duration_millis) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share(ptr, duration_millis);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rtc_notification_event_id
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events(ptr, rtc_notification_event_id, listener, f_status_) {
  var ptr0 = passArray8ToWasm0(rtc_notification_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_live_location_shares(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_live_location_shares(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} configuration
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration(ptr, configuration) {
  var ptr0 = passArray8ToWasm0(configuration, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {number} is_typing
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(ptr, is_typing) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(ptr, is_typing);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user(ptr, user_id, reason) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @param {Uint8Array} alt_aliases
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias(ptr, alias, alt_aliases) {
  var ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(alt_aliases, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} visibility
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility(ptr, visibility) {
  var ptr0 = passArray8ToWasm0(visibility, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} new_rule
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules(ptr, new_rule) {
  var ptr0 = passArray8ToWasm0(new_rule, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} updates
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(ptr, updates) {
  var ptr0 = passArray8ToWasm0(updates, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} visibility
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility(ptr, visibility) {
  var ptr0 = passArray8ToWasm0(visibility, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @param {Uint8Array} media_info
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(ptr, mime_type, data, media_info) {
  var ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(media_info, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_ids
 * @param {bigint} send_handle
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend(ptr, user_ids, send_handle) {
  var ptr0 = passArray8ToWasm0(user_ids, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend(ptr, ptr0, len0, send_handle);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} filter
 * @param {number} batch_size
 * @param {Uint8Array} via_server_name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(ptr, filter, batch_size, via_server_name) {
  var ptr0 = passArray8ToWasm0(filter, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(via_server_name, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(ptr, ptr0, len0, batch_size, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} page_size
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(ptr, page_size, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(ptr, page_size, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(ptr, listener, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room(ptr, room_id, f_status_) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} kind
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(ptr, kind, f_status_) {
  var ptr0 = passArray8ToWasm0(kind, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(ptr, room_id, f_status_) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_subscribe_to_rooms(ptr, room_ids) {
  var ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_subscribe_to_rooms(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} delay_before_showing_in_ms
 * @param {number} delay_before_hiding_in_ms
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(ptr, delay_before_showing_in_ms, delay_before_hiding_in_ms, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(ptr, delay_before_showing_in_ms, delay_before_hiding_in_ms, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(ptr, f_status_.__wbg_ptr);
  return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {number} chunk_size
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(ptr, chunk_size, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(ptr, chunk_size, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mentions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(ptr, mentions, f_status_) {
  var ptr0 = passArray8ToWasm0(mentions, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message(ptr, message, f_status_) {
  var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} state_event
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state(ptr, state_event, f_status_) {
  var ptr0 = passArray8ToWasm0(state_event, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message(ptr, user_id, message, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} state_event
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state(ptr, user_id, state_event, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(state_event, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification(ptr, user_id, f_status_) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification(ptr, ptr0, len0, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} sender_id
 * @param {Uint8Array} flow_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request(ptr, sender_id, flow_id) {
  var ptr0 = passArray8ToWasm0(sender_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(flow_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification(ptr, user_id) {
  var ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(ptr, delegate, f_status_) {
  var ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space(ptr, child_id, space_id) {
  var ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room(ptr, room_id) {
  var ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child(ptr, child_id) {
  var ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space(ptr, space_id) {
  var ptr0 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space(ptr, child_id, space_id) {
  var ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list(ptr, space_id) {
  var ptr0 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} callback_url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish(ptr, callback_url) {
  var ptr0 = passArray8ToWasm0(callback_url, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos(ptr, enable, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos(ptr, enable, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates(ptr, listener, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates(ptr, listener, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} msg_type
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content(ptr, msg_type, f_status_) {
  var ptr0 = passArray8ToWasm0(msg_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content(ptr, ptr0, len0, f_status_.__wbg_ptr);
  var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} question
 * @param {Uint8Array} answers
 * @param {number} max_selections
 * @param {Uint8Array} poll_kind
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(ptr, question, answers, max_selections, poll_kind) {
  var ptr0 = passArray8ToWasm0(question, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(answers, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(poll_kind, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(ptr, ptr0, len0, ptr1, len1, max_selections, ptr2, len2);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_or_transaction_id
 * @param {Uint8Array} new_content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit(ptr, event_or_transaction_id, new_content) {
  var ptr0 = passArray8ToWasm0(event_or_transaction_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(new_content, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} poll_start_event_id
 * @param {Uint8Array} text
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(ptr, poll_start_event_id, text) {
  var ptr0 = passArray8ToWasm0(poll_start_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(text, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id_str
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details(ptr, event_id_str) {
  var ptr0 = passArray8ToWasm0(event_id_str, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(ptr, receipt_type) {
  var ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} num_events
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(ptr, num_events) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(ptr, num_events);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} num_events
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards(ptr, num_events) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards(ptr, num_events);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_or_transaction_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event(ptr, event_or_transaction_id, reason) {
  var ptr0 = passArray8ToWasm0(event_or_transaction_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session_ids
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(ptr, session_ids, f_status_) {
  var ptr0 = passArray8ToWasm0(session_ids, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {bigint} msg
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send(ptr, msg) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send(ptr, msg);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} audio_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(ptr, params, audio_info, f_status_) {
  var ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(audio_info, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} file_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(ptr, params, file_info, f_status_) {
  var ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(file_info, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} thumbnail_source
 * @param {Uint8Array} image_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(ptr, params, thumbnail_source, image_info, f_status_) {
  var ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(thumbnail_source, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(image_info, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} body
 * @param {Uint8Array} geo_uri
 * @param {Uint8Array} description
 * @param {Uint8Array} zoom_level
 * @param {Uint8Array} asset_type
 * @param {Uint8Array} replied_to_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(ptr, body, geo_uri, description, zoom_level, asset_type, replied_to_event_id) {
  var ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(geo_uri, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(description, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  var ptr3 = passArray8ToWasm0(zoom_level, wasm.__wbindgen_malloc);
  var len3 = WASM_VECTOR_LEN;
  var ptr4 = passArray8ToWasm0(asset_type, wasm.__wbindgen_malloc);
  var len4 = WASM_VECTOR_LEN;
  var ptr5 = passArray8ToWasm0(replied_to_event_id, wasm.__wbindgen_malloc);
  var len5 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} poll_start_event_id
 * @param {Uint8Array} answers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(ptr, poll_start_event_id, answers) {
  var ptr0 = passArray8ToWasm0(poll_start_event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(answers, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(ptr, receipt_type, event_id) {
  var ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} msg
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(ptr, msg, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(ptr, msg, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} thumbnail_source
 * @param {Uint8Array} video_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(ptr, params, thumbnail_source, video_info, f_status_) {
  var ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(thumbnail_source, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(video_info, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} audio_info
 * @param {Uint8Array} waveform
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(ptr, params, audio_info, waveform, f_status_) {
  var ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(audio_info, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ptr2 = passArray8ToWasm0(waveform, wasm.__wbindgen_malloc);
  var len2 = WASM_VECTOR_LEN;
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(ptr, listener) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(ptr, listener);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} item_id
 * @param {Uint8Array} key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(ptr, item_id, key) {
  var ptr0 = passArray8ToWasm0(item_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(ptr, ptr0, len0, ptr1, len1);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event(ptr, event_id) {
  var ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(ptr, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(ptr, f_status_.__wbg_ptr);
  return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(ptr, f_status_.__wbg_ptr);
  return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified(ptr, f_status_.__wbg_ptr);
  return ret;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} room
 * @param {bigint} capabilities_provider
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(ptr, room, capabilities_provider) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(ptr, room, capabilities_provider);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr) {
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} msg
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(ptr, msg) {
  var ptr0 = passArray8ToWasm0(msg, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(ptr, ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata(handle, f_status_.__wbg_ptr);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata(handle, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  wasm.ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url(ptr, f_status_) {
  _assertClass(f_status_, RustCallStatus);
  var ret = wasm.ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url(ptr, f_status_.__wbg_ptr);
  var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
  wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  return v1;
}
function __wbg_get_imports() {
  var import0 = {
    __proto__: null,
    __wbg_Error_83742b46f01ce22d: function __wbg_Error_83742b46f01ce22d(arg0, arg1) {
      var ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_Number_a5a435bd7bbec835: function __wbg_Number_a5a435bd7bbec835(arg0) {
      var ret = Number(arg0);
      return ret;
    },
    __wbg_String_8564e559799eccda: function __wbg_String_8564e559799eccda(arg0, arg1) {
      var ret = String(arg1);
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_Window_241244be8c9776c1: function __wbg_Window_241244be8c9776c1(arg0) {
      var ret = arg0.Window;
      return ret;
    },
    __wbg_WorkerGlobalScope_8623a7c9030fbce2: function __wbg_WorkerGlobalScope_8623a7c9030fbce2(arg0) {
      var ret = arg0.WorkerGlobalScope;
      return ret;
    },
    __wbg___wbindgen_bigint_get_as_i64_447a76b5c6ef7bda: function __wbg___wbindgen_bigint_get_as_i64_447a76b5c6ef7bda(arg0, arg1) {
      var v = arg1;
      var ret = typeof v === 'bigint' ? v : undefined;
      getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: function __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1(arg0) {
      var v = arg0;
      var ret = typeof v === 'boolean' ? v : undefined;
      return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_5398f5bb970e0daa: function __wbg___wbindgen_debug_string_5398f5bb970e0daa(arg0, arg1) {
      var ret = debugString(arg1);
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_in_41dbb8413020e076: function __wbg___wbindgen_in_41dbb8413020e076(arg0, arg1) {
      var ret = arg0 in arg1;
      return ret;
    },
    __wbg___wbindgen_is_bigint_e2141d4f045b7eda: function __wbg___wbindgen_is_bigint_e2141d4f045b7eda(arg0) {
      var ret = typeof arg0 === 'bigint';
      return ret;
    },
    __wbg___wbindgen_is_function_3c846841762788c1: function __wbg___wbindgen_is_function_3c846841762788c1(arg0) {
      var ret = typeof arg0 === 'function';
      return ret;
    },
    __wbg___wbindgen_is_null_0b605fc6b167c56f: function __wbg___wbindgen_is_null_0b605fc6b167c56f(arg0) {
      var ret = arg0 === null;
      return ret;
    },
    __wbg___wbindgen_is_object_781bc9f159099513: function __wbg___wbindgen_is_object_781bc9f159099513(arg0) {
      var val = arg0;
      var ret = _typeof(val) === 'object' && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_7ef6b97b02428fae: function __wbg___wbindgen_is_string_7ef6b97b02428fae(arg0) {
      var ret = typeof arg0 === 'string';
      return ret;
    },
    __wbg___wbindgen_is_undefined_52709e72fb9f179c: function __wbg___wbindgen_is_undefined_52709e72fb9f179c(arg0) {
      var ret = arg0 === undefined;
      return ret;
    },
    __wbg___wbindgen_jsval_eq_ee31bfad3e536463: function __wbg___wbindgen_jsval_eq_ee31bfad3e536463(arg0, arg1) {
      var ret = arg0 === arg1;
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_5bcc3bed3c69e72b: function __wbg___wbindgen_jsval_loose_eq_5bcc3bed3c69e72b(arg0, arg1) {
      var ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_34bb9d9dcfa21373: function __wbg___wbindgen_number_get_34bb9d9dcfa21373(arg0, arg1) {
      var obj = arg1;
      var ret = typeof obj === 'number' ? obj : undefined;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_395e606bd0ee4427: function __wbg___wbindgen_string_get_395e606bd0ee4427(arg0, arg1) {
      var obj = arg1;
      var ret = typeof obj === 'string' ? obj : undefined;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_6ddd609b62940d55: function __wbg___wbindgen_throw_6ddd609b62940d55(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function __wbg__wbg_cb_unref_6b5b6b8576d35cb1(arg0) {
      arg0._wbg_cb_unref();
    },
    __wbg_abort_5ef96933660780b7: function __wbg_abort_5ef96933660780b7(arg0) {
      arg0.abort();
    },
    __wbg_abort_60dcb252ae0031fc: function __wbg_abort_60dcb252ae0031fc() {
      return handleError(function (arg0) {
        arg0.abort();
      }, arguments);
    },
    __wbg_abort_6479c2d794ebf2ee: function __wbg_abort_6479c2d794ebf2ee(arg0, arg1) {
      arg0.abort(arg1);
    },
    __wbg_acquireCapabilities_4ffc59e65841cc63: function __wbg_acquireCapabilities_4ffc59e65841cc63(arg0) {
      var ret = arg0.acquireCapabilities;
      return ret;
    },
    __wbg_add_31c3a85003d5143e: function __wbg_add_31c3a85003d5143e() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.add(arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_add_7857847c343fb7de: function __wbg_add_7857847c343fb7de() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.add(arg1);
        return ret;
      }, arguments);
    },
    __wbg_append_608dfb635ee8998f: function __wbg_append_608dfb635ee8998f() {
      return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
      }, arguments);
    },
    __wbg_arrayBuffer_eb8e9ca620af2a19: function __wbg_arrayBuffer_eb8e9ca620af2a19() {
      return handleError(function (arg0) {
        var ret = arg0.arrayBuffer();
        return ret;
      }, arguments);
    },
    __wbg_bound_4e343b4fbe5419fa: function __wbg_bound_4e343b4fbe5419fa() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = IDBKeyRange.bound(arg0, arg1, arg2 !== 0, arg3 !== 0);
        return ret;
      }, arguments);
    },
    __wbg_call_0abff8e1b39e3576: function __wbg_call_0abff8e1b39e3576(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_11f4479044e6b9b0: function __wbg_call_11f4479044e6b9b0(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_20861ffc1368eef2: function __wbg_call_20861ffc1368eef2(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
      wasm.__wbindgen_free(arg5, arg6 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
      return ret;
    },
    __wbg_call_21595811003324c4: function __wbg_call_21595811003324c4(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_21b45b234bbe19b7: function __wbg_call_21b45b234bbe19b7(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_231856ddbe14864d: function __wbg_call_231856ddbe14864d(arg0) {
      var ret = arg0.call;
      return ret;
    },
    __wbg_call_237fea2f711793db: function __wbg_call_237fea2f711793db(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_23f4f3d50d2534a5: function __wbg_call_23f4f3d50d2534a5(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_28e73eb206234457: function __wbg_call_28e73eb206234457(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_2a296ca0d57f2f38: function __wbg_call_2a296ca0d57f2f38(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_2d781c1f4d5c0ef8: function __wbg_call_2d781c1f4d5c0ef8() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.call(arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_call_336934a0597a31ff: function __wbg_call_336934a0597a31ff(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_35f9ae5008661707: function __wbg_call_35f9ae5008661707(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_3a6afcc8a3b8ffe9: function __wbg_call_3a6afcc8a3b8ffe9(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_460cf8c2e1f36e66: function __wbg_call_460cf8c2e1f36e66(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_4e0dc835929f0930: function __wbg_call_4e0dc835929f0930(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
      wasm.__wbindgen_free(arg5, arg6 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
      return ret;
    },
    __wbg_call_4e8b5394a90fac4d: function __wbg_call_4e8b5394a90fac4d(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_4f8a29b8d3a47516: function __wbg_call_4f8a29b8d3a47516(arg0, arg1, arg2) {
      arg0.call(arg1, BigInt.asUintN(64, arg2));
    },
    __wbg_call_57619a067dd36546: function __wbg_call_57619a067dd36546(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
      wasm.__wbindgen_free(arg5, arg6 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
      return ret;
    },
    __wbg_call_58e9f3fa5c9d22c8: function __wbg_call_58e9f3fa5c9d22c8(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_5e3d2eb93b71273e: function __wbg_call_5e3d2eb93b71273e(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_662837aa8ef22644: function __wbg_call_662837aa8ef22644(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_68474550f3ebb9e4: function __wbg_call_68474550f3ebb9e4(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
      wasm.__wbindgen_free(arg5, arg6 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
      return ret;
    },
    __wbg_call_6e37cb83c0fcd191: function __wbg_call_6e37cb83c0fcd191(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_72615218a1cc7740: function __wbg_call_72615218a1cc7740(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_7bf9b771729a8fb9: function __wbg_call_7bf9b771729a8fb9(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_82a4cf907621fc56: function __wbg_call_82a4cf907621fc56(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_82fb802cd7c321ba: function __wbg_call_82fb802cd7c321ba(arg0, arg1, arg2, arg3) {
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), arg3);
      return ret;
    },
    __wbg_call_8d1d15b73653e1aa: function __wbg_call_8d1d15b73653e1aa(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_90ad56269b158f56: function __wbg_call_90ad56269b158f56(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_98d85a60818cea7b: function __wbg_call_98d85a60818cea7b(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_9dd04e26d297744a: function __wbg_call_9dd04e26d297744a(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_9e37eba1de162f82: function __wbg_call_9e37eba1de162f82(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_afe117b1e8774875: function __wbg_call_afe117b1e8774875(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_c73bce413631b19d: function __wbg_call_c73bce413631b19d(arg0, arg1, arg2, arg3) {
      arg0.call(arg1, BigInt.asUintN(64, arg2), arg3);
    },
    __wbg_call_d7bea5b46e5205b6: function __wbg_call_d7bea5b46e5205b6(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_e133b57c9155d22c: function __wbg_call_e133b57c9155d22c() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_call_e1d0fac2f794ff48: function __wbg_call_e1d0fac2f794ff48(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
      wasm.__wbindgen_free(arg5, arg6 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
      return ret;
    },
    __wbg_call_e4ff0f39c69e2614: function __wbg_call_e4ff0f39c69e2614(arg0, arg1, arg2) {
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
      return ret;
    },
    __wbg_call_ea08f332d336c54f: function __wbg_call_ea08f332d336c54f(arg0, arg1, arg2) {
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
      return ret;
    },
    __wbg_call_f6a9cee19ecd3e2f: function __wbg_call_f6a9cee19ecd3e2f(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_call_f983b49d42a0b012: function __wbg_call_f983b49d42a0b012(arg0, arg1, arg2, arg3, arg4) {
      var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
      wasm.__wbindgen_free(arg3, arg4 * 1, 1);
      var ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
      return ret;
    },
    __wbg_clearTimeout_113b1cde814ec762: function __wbg_clearTimeout_113b1cde814ec762(arg0) {
      var ret = clearTimeout(arg0);
      return ret;
    },
    __wbg_clearTimeout_2256f1e7b94ef517: function __wbg_clearTimeout_2256f1e7b94ef517(arg0) {
      var ret = clearTimeout(arg0);
      return ret;
    },
    __wbg_clear_1885f7bf35006b0c: function __wbg_clear_1885f7bf35006b0c() {
      return handleError(function (arg0) {
        var ret = arg0.clear();
        return ret;
      }, arguments);
    },
    __wbg_close_cbf870bdad0aad99: function __wbg_close_cbf870bdad0aad99(arg0) {
      arg0.close();
    },
    __wbg_code_53ac8aba966622d8: function __wbg_code_53ac8aba966622d8(arg0) {
      var ret = arg0.code;
      return ret;
    },
    __wbg_code_b0f50d9f21cf2589: function __wbg_code_b0f50d9f21cf2589(arg0) {
      var ret = arg0.code;
      return ret;
    },
    __wbg_code_bc4dde4d67926010: function __wbg_code_bc4dde4d67926010(arg0) {
      var ret = arg0.code;
      return ret;
    },
    __wbg_commit_ebd6d9676954e0d2: function __wbg_commit_ebd6d9676954e0d2() {
      return handleError(function (arg0) {
        arg0.commit();
      }, arguments);
    },
    __wbg_continue_44abcf9ba406e87e: function __wbg_continue_44abcf9ba406e87e() {
      return handleError(function (arg0) {
        arg0["continue"]();
      }, arguments);
    },
    __wbg_count_788ed31b2dfcb569: function __wbg_count_788ed31b2dfcb569() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.count(arg1);
        return ret;
      }, arguments);
    },
    __wbg_count_8e33bb4fa72dbb75: function __wbg_count_8e33bb4fa72dbb75() {
      return handleError(function (arg0) {
        var ret = arg0.count();
        return ret;
      }, arguments);
    },
    __wbg_count_9e4655e0ae60b3fa: function __wbg_count_9e4655e0ae60b3fa() {
      return handleError(function (arg0) {
        var ret = arg0.count();
        return ret;
      }, arguments);
    },
    __wbg_count_c6fb7d5ecbe69368: function __wbg_count_c6fb7d5ecbe69368() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.count(arg1);
        return ret;
      }, arguments);
    },
    __wbg_createIndex_323cb0213cc21d9b: function __wbg_createIndex_323cb0213cc21d9b() {
      return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        var ret = arg0.createIndex(getStringFromWasm0(arg1, arg2), arg3, arg4);
        return ret;
      }, arguments);
    },
    __wbg_createIndex_38ef2e77937beaca: function __wbg_createIndex_38ef2e77937beaca() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = arg0.createIndex(getStringFromWasm0(arg1, arg2), arg3);
        return ret;
      }, arguments);
    },
    __wbg_createObjectStore_4709de9339ffc6c0: function __wbg_createObjectStore_4709de9339ffc6c0() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = arg0.createObjectStore(getStringFromWasm0(arg1, arg2), arg3);
        return ret;
      }, arguments);
    },
    __wbg_createObjectStore_92a8aebcc6f9d7e3: function __wbg_createObjectStore_92a8aebcc6f9d7e3() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.createObjectStore(getStringFromWasm0(arg1, arg2));
        return ret;
      }, arguments);
    },
    __wbg_crypto_0a92367f02a93895: function __wbg_crypto_0a92367f02a93895(arg0) {
      var ret = arg0.crypto;
      return ret;
    },
    __wbg_deleteObjectStore_65401ab024ac08c1: function __wbg_deleteObjectStore_65401ab024ac08c1() {
      return handleError(function (arg0, arg1, arg2) {
        arg0.deleteObjectStore(getStringFromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_delete_40db93c05c546fb9: function __wbg_delete_40db93c05c546fb9() {
      return handleError(function (arg0, arg1) {
        var ret = arg0["delete"](arg1);
        return ret;
      }, arguments);
    },
    __wbg_delete_6bc762d51ba2711d: function __wbg_delete_6bc762d51ba2711d() {
      return handleError(function (arg0) {
        var ret = arg0["delete"]();
        return ret;
      }, arguments);
    },
    __wbg_didAcceptVerificationRequest_ce5ef34db6b0b980: function __wbg_didAcceptVerificationRequest_ce5ef34db6b0b980(arg0) {
      var ret = arg0.didAcceptVerificationRequest;
      return ret;
    },
    __wbg_didCancel_798f3c6eb92ce6e3: function __wbg_didCancel_798f3c6eb92ce6e3(arg0) {
      var ret = arg0.didCancel;
      return ret;
    },
    __wbg_didFail_7b316fe1e2ec0a37: function __wbg_didFail_7b316fe1e2ec0a37(arg0) {
      var ret = arg0.didFail;
      return ret;
    },
    __wbg_didFinish_db09fc6671101ccd: function __wbg_didFinish_db09fc6671101ccd(arg0) {
      var ret = arg0.didFinish;
      return ret;
    },
    __wbg_didReceiveAuthError_e36eb8636498d24f: function __wbg_didReceiveAuthError_e36eb8636498d24f(arg0) {
      var ret = arg0.didReceiveAuthError;
      return ret;
    },
    __wbg_didReceiveVerificationData_f1a47150790f337c: function __wbg_didReceiveVerificationData_f1a47150790f337c(arg0) {
      var ret = arg0.didReceiveVerificationData;
      return ret;
    },
    __wbg_didReceiveVerificationRequest_b7108bc1ab940ef4: function __wbg_didReceiveVerificationRequest_b7108bc1ab940ef4(arg0) {
      var ret = arg0.didReceiveVerificationRequest;
      return ret;
    },
    __wbg_didStartSasVerification_2336a58816f5ce8f: function __wbg_didStartSasVerification_2336a58816f5ce8f(arg0) {
      var ret = arg0.didStartSasVerification;
      return ret;
    },
    __wbg_done_08ce71ee07e3bd17: function __wbg_done_08ce71ee07e3bd17(arg0) {
      var ret = arg0.done;
      return ret;
    },
    __wbg_entries_5b8fe91cea59610e: function __wbg_entries_5b8fe91cea59610e(arg0) {
      var ret = arg0.entries();
      return ret;
    },
    __wbg_entries_e8a20ff8c9757101: function __wbg_entries_e8a20ff8c9757101(arg0) {
      var ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_74898554122344a8: function __wbg_error_74898554122344a8() {
      return handleError(function (arg0) {
        var ret = arg0.error;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_error_a6fa202b58aa1cd3: function __wbg_error_a6fa202b58aa1cd3(arg0, arg1) {
      var deferred0_0;
      var deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_error_buf_98706bec3539d8cc: function __wbg_error_buf_98706bec3539d8cc(arg0, arg1) {
      var ret = arg1.errorBuf;
      var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_error_buf_cf8b2b629df3ec01: function __wbg_error_buf_cf8b2b629df3ec01(arg0, arg1) {
      var ret = arg1.errorBuf;
      var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_fetch_43b2f110608a59ff: function __wbg_fetch_43b2f110608a59ff(arg0) {
      var ret = fetch(arg0);
      return ret;
    },
    __wbg_fetch_5550a88cf343aaa9: function __wbg_fetch_5550a88cf343aaa9(arg0, arg1) {
      var ret = arg0.fetch(arg1);
      return ret;
    },
    __wbg_getAllKeys_51b926ff4a4de3b2: function __wbg_getAllKeys_51b926ff4a4de3b2() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.getAllKeys(arg1);
        return ret;
      }, arguments);
    },
    __wbg_getAllKeys_578e442e4cc4c2b4: function __wbg_getAllKeys_578e442e4cc4c2b4() {
      return handleError(function (arg0) {
        var ret = arg0.getAllKeys();
        return ret;
      }, arguments);
    },
    __wbg_getAll_5ed401da69904dee: function __wbg_getAll_5ed401da69904dee() {
      return handleError(function (arg0) {
        var ret = arg0.getAll();
        return ret;
      }, arguments);
    },
    __wbg_getAll_690f659b57ae2d51: function __wbg_getAll_690f659b57ae2d51() {
      return handleError(function (arg0) {
        var ret = arg0.getAll();
        return ret;
      }, arguments);
    },
    __wbg_getAll_a959860fbb7a424a: function __wbg_getAll_a959860fbb7a424a() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.getAll(arg1);
        return ret;
      }, arguments);
    },
    __wbg_getAll_abff748aa6f1c273: function __wbg_getAll_abff748aa6f1c273() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.getAll(arg1);
        return ret;
      }, arguments);
    },
    __wbg_getAll_b4181cf52224a271: function __wbg_getAll_b4181cf52224a271() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.getAll(arg1, arg2 >>> 0);
        return ret;
      }, arguments);
    },
    __wbg_getRandomValues_49053454921dcaf8: function __wbg_getRandomValues_49053454921dcaf8() {
      return handleError(function (arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_76dfc69825c9c552: function __wbg_getRandomValues_76dfc69825c9c552() {
      return handleError(function (arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_d3f1739dc62f980a: function __wbg_getRandomValues_d3f1739dc62f980a() {
      return handleError(function (arg0, arg1) {
        arg0.getRandomValues(arg1);
      }, arguments);
    },
    __wbg_getTime_1dad7b5386ddd2d9: function __wbg_getTime_1dad7b5386ddd2d9(arg0) {
      var ret = arg0.getTime();
      return ret;
    },
    __wbg_getTimezoneOffset_639bcf2dde21158b: function __wbg_getTimezoneOffset_639bcf2dde21158b(arg0) {
      var ret = arg0.getTimezoneOffset();
      return ret;
    },
    __wbg_get_326e41e095fb2575: function __wbg_get_326e41e095fb2575() {
      return handleError(function (arg0, arg1) {
        var ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_3ef1eba1850ade27: function __wbg_get_3ef1eba1850ade27() {
      return handleError(function (arg0, arg1) {
        var ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_6ac8c8119f577720: function __wbg_get_6ac8c8119f577720() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.get(arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_a8ee5c45dabc1b3b: function __wbg_get_a8ee5c45dabc1b3b(arg0, arg1) {
      var ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_ddeb0483be6ef0ef: function __wbg_get_ddeb0483be6ef0ef() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.get(arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_329cfe50afab7352: function __wbg_get_unchecked_329cfe50afab7352(arg0, arg1) {
      var ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_with_ref_key_6412cf3094599694: function __wbg_get_with_ref_key_6412cf3094599694(arg0, arg1) {
      var ret = arg0[arg1];
      return ret;
    },
    __wbg_global_94a489d2e6a0c5fd: function __wbg_global_94a489d2e6a0c5fd(arg0) {
      var ret = arg0.global;
      return ret;
    },
    __wbg_has_926ef2ff40b308cf: function __wbg_has_926ef2ff40b308cf() {
      return handleError(function (arg0, arg1) {
        var ret = Reflect.has(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_headers_eb2234545f9ff993: function __wbg_headers_eb2234545f9ff993(arg0) {
      var ret = arg0.headers;
      return ret;
    },
    __wbg_index_f1b3b30c5d5af6fb: function __wbg_index_f1b3b30c5d5af6fb() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.index(getStringFromWasm0(arg1, arg2));
        return ret;
      }, arguments);
    },
    __wbg_indexedDB_2ae2128d487c6ebc: function __wbg_indexedDB_2ae2128d487c6ebc() {
      return handleError(function (arg0) {
        var ret = arg0.indexedDB;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_indexedDB_47c354eb27472a00: function __wbg_indexedDB_47c354eb27472a00() {
      return handleError(function (arg0) {
        var ret = arg0.indexedDB;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_indexedDB_c83feb7151bbde52: function __wbg_indexedDB_c83feb7151bbde52() {
      return handleError(function (arg0) {
        var ret = arg0.indexedDB;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
      }, arguments);
    },
    __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: function __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6(arg0) {
      var result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_CursorSys_383984afc1fa1bbc: function __wbg_instanceof_CursorSys_383984afc1fa1bbc(arg0) {
      var result;
      try {
        result = arg0 instanceof IDBCursorWithValue;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_DomException_2bdcf7791a2d7d09: function __wbg_instanceof_DomException_2bdcf7791a2d7d09(arg0) {
      var result;
      try {
        result = arg0 instanceof DOMException;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_Error_4691a5b466e32a80: function __wbg_instanceof_Error_4691a5b466e32a80(arg0) {
      var result;
      try {
        result = arg0 instanceof Error;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_IdbCursor_cbe52b3829ab983b: function __wbg_instanceof_IdbCursor_cbe52b3829ab983b(arg0) {
      var result;
      try {
        result = arg0 instanceof IDBCursor;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_IdbDatabase_5f436cc89cc07f14: function __wbg_instanceof_IdbDatabase_5f436cc89cc07f14(arg0) {
      var result;
      try {
        result = arg0 instanceof IDBDatabase;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_IdbOpenDbRequest_10c2576001eb6613: function __wbg_instanceof_IdbOpenDbRequest_10c2576001eb6613(arg0) {
      var result;
      try {
        result = arg0 instanceof IDBOpenDBRequest;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_IdbRequest_6a0e24572d4f1d46: function __wbg_instanceof_IdbRequest_6a0e24572d4f1d46(arg0) {
      var result;
      try {
        result = arg0 instanceof IDBRequest;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_Map_f194b366846aca0c: function __wbg_instanceof_Map_f194b366846aca0c(arg0) {
      var result;
      try {
        result = arg0 instanceof Map;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_Response_9b4d9fd451e051b1: function __wbg_instanceof_Response_9b4d9fd451e051b1(arg0) {
      var result;
      try {
        result = arg0 instanceof Response;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_740438561a5b956d: function __wbg_instanceof_Uint8Array_740438561a5b956d(arg0) {
      var result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      var ret = result;
      return ret;
    },
    __wbg_isArray_33b91feb269ff46e: function __wbg_isArray_33b91feb269ff46e(arg0) {
      var ret = Array.isArray(arg0);
      return ret;
    },
    __wbg_isArray_42f3245bcac28e65: function __wbg_isArray_42f3245bcac28e65(arg0) {
      var ret = Array.isArray(arg0);
      return ret;
    },
    __wbg_isSafeInteger_ecd6a7f9c3e053cd: function __wbg_isSafeInteger_ecd6a7f9c3e053cd(arg0) {
      var ret = Number.isSafeInteger(arg0);
      return ret;
    },
    __wbg_item_f0d01dd089cc05ba: function __wbg_item_f0d01dd089cc05ba(arg0, arg1, arg2) {
      var ret = arg1.item(arg2 >>> 0);
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_iterator_d8f549ec8fb061b1: function __wbg_iterator_d8f549ec8fb061b1() {
      var ret = Symbol.iterator;
      return ret;
    },
    __wbg_key_581f2698de7f8240: function __wbg_key_581f2698de7f8240() {
      return handleError(function (arg0) {
        var ret = arg0.key;
        return ret;
      }, arguments);
    },
    __wbg_length_b3416cf66a5452c8: function __wbg_length_b3416cf66a5452c8(arg0) {
      var ret = arg0.length;
      return ret;
    },
    __wbg_length_ea16607d7b61445b: function __wbg_length_ea16607d7b61445b(arg0) {
      var ret = arg0.length;
      return ret;
    },
    __wbg_lowerBound_7dd256f30bc73b4e: function __wbg_lowerBound_7dd256f30bc73b4e() {
      return handleError(function (arg0, arg1) {
        var ret = IDBKeyRange.lowerBound(arg0, arg1 !== 0);
        return ret;
      }, arguments);
    },
    __wbg_message_00d63f20c41713dd: function __wbg_message_00d63f20c41713dd(arg0) {
      var ret = arg0.message;
      return ret;
    },
    __wbg_message_e959edc81e4b6cb7: function __wbg_message_e959edc81e4b6cb7(arg0, arg1) {
      var ret = arg1.message;
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_msCrypto_bcce18ddb1ca6c2d: function __wbg_msCrypto_bcce18ddb1ca6c2d(arg0) {
      var ret = arg0.msCrypto;
      return ret;
    },
    __wbg_name_3393c0574942cc57: function __wbg_name_3393c0574942cc57(arg0, arg1) {
      var ret = arg1.name;
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_name_7a3bbd030d0afa16: function __wbg_name_7a3bbd030d0afa16(arg0, arg1) {
      var ret = arg1.name;
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_new_0837727332ac86ba: function __wbg_new_0837727332ac86ba() {
      return handleError(function () {
        var ret = new Headers();
        return ret;
      }, arguments);
    },
    __wbg_new_0_1dcafdf5e786e876: function __wbg_new_0_1dcafdf5e786e876() {
      var ret = new Date();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function __wbg_new_227d7c05414eb861() {
      var ret = new Error();
      return ret;
    },
    __wbg_new_5f486cdf45a04d78: function __wbg_new_5f486cdf45a04d78(arg0) {
      var ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_a70fbab9066b301f: function __wbg_new_a70fbab9066b301f() {
      var ret = new Array();
      return ret;
    },
    __wbg_new_ab79df5bd7c26067: function __wbg_new_ab79df5bd7c26067() {
      var ret = new Object();
      return ret;
    },
    __wbg_new_c518c60af666645b: function __wbg_new_c518c60af666645b() {
      return handleError(function () {
        var ret = new AbortController();
        return ret;
      }, arguments);
    },
    __wbg_new_d15cb560a6a0e5f0: function __wbg_new_d15cb560a6a0e5f0(arg0, arg1) {
      var ret = new Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_new_fd94ca5c9639abd2: function __wbg_new_fd94ca5c9639abd2(arg0) {
      var ret = new Date(arg0);
      return ret;
    },
    __wbg_new_from_slice_22da9388ac046e50: function __wbg_new_from_slice_22da9388ac046e50(arg0, arg1) {
      var ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_new_typed_bccac67128ed885a: function __wbg_new_typed_bccac67128ed885a() {
      var ret = new Array();
      return ret;
    },
    __wbg_new_with_length_825018a1616e9e55: function __wbg_new_with_length_825018a1616e9e55(arg0) {
      var ret = new Uint8Array(arg0 >>> 0);
      return ret;
    },
    __wbg_new_with_message_and_name_9ecedc0e6daf421c: function __wbg_new_with_message_and_name_9ecedc0e6daf421c() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = new DOMException(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return ret;
      }, arguments);
    },
    __wbg_new_with_str_and_init_b4b54d1a819bc724: function __wbg_new_with_str_and_init_b4b54d1a819bc724() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
        return ret;
      }, arguments);
    },
    __wbg_next_11b99ee6237339e3: function __wbg_next_11b99ee6237339e3() {
      return handleError(function (arg0) {
        var ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_next_e01a967809d1aa68: function __wbg_next_e01a967809d1aa68(arg0) {
      var ret = arg0.next;
      return ret;
    },
    __wbg_node_8ae12470cbc10fa7: function __wbg_node_8ae12470cbc10fa7(arg0) {
      var ret = arg0.node;
      return ret;
    },
    __wbg_now_16f0c993d5dd6c27: function __wbg_now_16f0c993d5dd6c27() {
      var ret = Date.now();
      return ret;
    },
    __wbg_now_e7c6795a7f81e10f: function __wbg_now_e7c6795a7f81e10f(arg0) {
      var ret = arg0.now();
      return ret;
    },
    __wbg_objectStoreNames_564985d2e9ae7523: function __wbg_objectStoreNames_564985d2e9ae7523(arg0) {
      var ret = arg0.objectStoreNames;
      return ret;
    },
    __wbg_objectStore_f314ab152a5c7bd0: function __wbg_objectStore_f314ab152a5c7bd0() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.objectStore(getStringFromWasm0(arg1, arg2));
        return ret;
      }, arguments);
    },
    __wbg_oldVersion_c28aefdefa84030a: function __wbg_oldVersion_c28aefdefa84030a(arg0) {
      var ret = arg0.oldVersion;
      return ret;
    },
    __wbg_onBackgroundTaskErrorReport_e229854d0a58e912: function __wbg_onBackgroundTaskErrorReport_e229854d0a58e912(arg0) {
      var ret = arg0.onBackgroundTaskErrorReport;
      return ret;
    },
    __wbg_onChange_2d3f488894317f5d: function __wbg_onChange_2d3f488894317f5d(arg0) {
      var ret = arg0.onChange;
      return ret;
    },
    __wbg_onDuplicateKeyUploadError_164d06a80580b879: function __wbg_onDuplicateKeyUploadError_164d06a80580b879(arg0) {
      var ret = arg0.onDuplicateKeyUploadError;
      return ret;
    },
    __wbg_onError_c13045cc07324a01: function __wbg_onError_c13045cc07324a01(arg0) {
      var ret = arg0.onError;
      return ret;
    },
    __wbg_onNotification_bfc01095ea0d5e55: function __wbg_onNotification_bfc01095ea0d5e55(arg0) {
      var ret = arg0.onNotification;
      return ret;
    },
    __wbg_onUpdate_db10676af595972e: function __wbg_onUpdate_db10676af595972e(arg0) {
      var ret = arg0.onUpdate;
      return ret;
    },
    __wbg_onUtd_ca3a1a683a2fbfe6: function __wbg_onUtd_ca3a1a683a2fbfe6(arg0) {
      var ret = arg0.onUtd;
      return ret;
    },
    __wbg_openCursor_7f0cc3f660850dc1: function __wbg_openCursor_7f0cc3f660850dc1() {
      return handleError(function (arg0) {
        var ret = arg0.openCursor();
        return ret;
      }, arguments);
    },
    __wbg_openCursor_d2c404b7a149da6b: function __wbg_openCursor_d2c404b7a149da6b() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.openCursor(arg1);
        return ret;
      }, arguments);
    },
    __wbg_openCursor_e845b9a1bdca92b8: function __wbg_openCursor_e845b9a1bdca92b8() {
      return handleError(function (arg0) {
        var ret = arg0.openCursor();
        return ret;
      }, arguments);
    },
    __wbg_openCursor_e8f8c35163e2eca2: function __wbg_openCursor_e8f8c35163e2eca2() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.openCursor(arg1);
        return ret;
      }, arguments);
    },
    __wbg_openKeyCursor_9248799cbfbe894d: function __wbg_openKeyCursor_9248799cbfbe894d() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.openKeyCursor(arg1);
        return ret;
      }, arguments);
    },
    __wbg_openKeyCursor_9f6910fe6a903666: function __wbg_openKeyCursor_9f6910fe6a903666() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.openKeyCursor(arg1, __wbindgen_enum_IdbCursorDirection[arg2]);
        return ret;
      }, arguments);
    },
    __wbg_openKeyCursor_a1b14bb2a91eb6e9: function __wbg_openKeyCursor_a1b14bb2a91eb6e9() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.openKeyCursor(arg1, __wbindgen_enum_IdbCursorDirection[arg2]);
        return ret;
      }, arguments);
    },
    __wbg_open_768d1078e6f07723: function __wbg_open_768d1078e6f07723() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = arg0.open(getStringFromWasm0(arg1, arg2), arg3);
        return ret;
      }, arguments);
    },
    __wbg_open_e7a9d3d6344572f6: function __wbg_open_e7a9d3d6344572f6() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = arg0.open(getStringFromWasm0(arg1, arg2), arg3 >>> 0);
        return ret;
      }, arguments);
    },
    __wbg_open_f3dc09caa3990bc4: function __wbg_open_f3dc09caa3990bc4() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.open(getStringFromWasm0(arg1, arg2));
        return ret;
      }, arguments);
    },
    __wbg_parse_e9eddd2a82c706eb: function __wbg_parse_e9eddd2a82c706eb() {
      return handleError(function (arg0, arg1) {
        var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_performance_3fcf6e32a7e1ed0a: function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
      var ret = arg0.performance;
      return ret;
    },
    __wbg_pointee_3f3ed618768abc5a: function __wbg_pointee_3f3ed618768abc5a(arg0, arg1) {
      var ret = arg1.pointee;
      var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_process_c9cfbc1e2919260e: function __wbg_process_c9cfbc1e2919260e(arg0) {
      var ret = arg0.process;
      return ret;
    },
    __wbg_prototypesetcall_d62e5099504357e6: function __wbg_prototypesetcall_d62e5099504357e6(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_push_e87b0e732085a946: function __wbg_push_e87b0e732085a946(arg0, arg1) {
      var ret = arg0.push(arg1);
      return ret;
    },
    __wbg_put_ae369598c083f1f5: function __wbg_put_ae369598c083f1f5() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.put(arg1);
        return ret;
      }, arguments);
    },
    __wbg_put_f1673d719f93ce22: function __wbg_put_f1673d719f93ce22() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.put(arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_queueMicrotask_0c399741342fb10f: function __wbg_queueMicrotask_0c399741342fb10f(arg0) {
      var ret = arg0.queueMicrotask;
      return ret;
    },
    __wbg_queueMicrotask_a082d78ce798393e: function __wbg_queueMicrotask_a082d78ce798393e(arg0) {
      queueMicrotask(arg0);
    },
    __wbg_randomFillSync_143a36904a882f2a: function __wbg_randomFillSync_143a36904a882f2a() {
      return handleError(function (arg0, arg1) {
        arg0.randomFillSync(arg1);
      }, arguments);
    },
    __wbg_readyState_57fa0866477cc0c4: function __wbg_readyState_57fa0866477cc0c4(arg0) {
      var ret = arg0.readyState;
      return (__wbindgen_enum_IdbRequestReadyState.indexOf(ret) + 1 || 3) - 1;
    },
    __wbg_request_64abeba15a72c084: function __wbg_request_64abeba15a72c084(arg0) {
      var ret = arg0.request;
      return ret;
    },
    __wbg_request_72a78988f2edecad: function __wbg_request_72a78988f2edecad(arg0) {
      var ret = arg0.request;
      return ret;
    },
    __wbg_require_def5a4782aa802ec: function __wbg_require_def5a4782aa802ec() {
      return handleError(function () {
        var ret = module.require;
        return ret;
      }, arguments);
    },
    __wbg_resolve_ae8d83246e5bcc12: function __wbg_resolve_ae8d83246e5bcc12(arg0) {
      var ret = Promise.resolve(arg0);
      return ret;
    },
    __wbg_result_c5baa2d3d690a01a: function __wbg_result_c5baa2d3d690a01a() {
      return handleError(function (arg0) {
        var ret = arg0.result;
        return ret;
      }, arguments);
    },
    __wbg_retrieveSessionFromKeychain_239af56adce1cbc2: function __wbg_retrieveSessionFromKeychain_239af56adce1cbc2(arg0) {
      var ret = arg0.retrieveSessionFromKeychain;
      return ret;
    },
    __wbg_saveSessionInKeychain_abe1dcb0ab9f6d0d: function __wbg_saveSessionInKeychain_abe1dcb0ab9f6d0d(arg0) {
      var ret = arg0.saveSessionInKeychain;
      return ret;
    },
    __wbg_setTimeout_b188b3bcc8977c7d: function __wbg_setTimeout_b188b3bcc8977c7d(arg0, arg1) {
      var ret = setTimeout(arg0, arg1);
      return ret;
    },
    __wbg_setTimeout_ef24d2fc3ad97385: function __wbg_setTimeout_ef24d2fc3ad97385() {
      return handleError(function (arg0, arg1) {
        var ret = setTimeout(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_set_282384002438957f: function __wbg_set_282384002438957f(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_set_6be42768c690e380: function __wbg_set_6be42768c690e380(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_body_a3d856b097dfda04: function __wbg_set_body_a3d856b097dfda04(arg0, arg1) {
      arg0.body = arg1;
    },
    __wbg_set_cache_ec7e430c6056ebda: function __wbg_set_cache_ec7e430c6056ebda(arg0, arg1) {
      arg0.cache = __wbindgen_enum_RequestCache[arg1];
    },
    __wbg_set_credentials_ed63183445882c65: function __wbg_set_credentials_ed63183445882c65(arg0, arg1) {
      arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
    },
    __wbg_set_headers_3c8fecc693b75327: function __wbg_set_headers_3c8fecc693b75327(arg0, arg1) {
      arg0.headers = arg1;
    },
    __wbg_set_key_path_3c45a8ff0b89e678: function __wbg_set_key_path_3c45a8ff0b89e678(arg0, arg1) {
      arg0.keyPath = arg1;
    },
    __wbg_set_method_8c015e8bcafd7be1: function __wbg_set_method_8c015e8bcafd7be1(arg0, arg1, arg2) {
      arg0.method = getStringFromWasm0(arg1, arg2);
    },
    __wbg_set_mode_5a87f2c809cf37c2: function __wbg_set_mode_5a87f2c809cf37c2(arg0, arg1) {
      arg0.mode = __wbindgen_enum_RequestMode[arg1];
    },
    __wbg_set_onabort_63885d8d7841a8d5: function __wbg_set_onabort_63885d8d7841a8d5(arg0, arg1) {
      arg0.onabort = arg1;
    },
    __wbg_set_oncomplete_f31e6dc6d16c1ff8: function __wbg_set_oncomplete_f31e6dc6d16c1ff8(arg0, arg1) {
      arg0.oncomplete = arg1;
    },
    __wbg_set_onerror_8a268cb237177bba: function __wbg_set_onerror_8a268cb237177bba(arg0, arg1) {
      arg0.onerror = arg1;
    },
    __wbg_set_onerror_c1ecd6233c533c08: function __wbg_set_onerror_c1ecd6233c533c08(arg0, arg1) {
      arg0.onerror = arg1;
    },
    __wbg_set_onsuccess_fca94ded107b64af: function __wbg_set_onsuccess_fca94ded107b64af(arg0, arg1) {
      arg0.onsuccess = arg1;
    },
    __wbg_set_onupgradeneeded_860ce42184f987e7: function __wbg_set_onupgradeneeded_860ce42184f987e7(arg0, arg1) {
      arg0.onupgradeneeded = arg1;
    },
    __wbg_set_signal_0cebecb698f25d21: function __wbg_set_signal_0cebecb698f25d21(arg0, arg1) {
      arg0.signal = arg1;
    },
    __wbg_set_unique_a39d85db47f8e025: function __wbg_set_unique_a39d85db47f8e025(arg0, arg1) {
      arg0.unique = arg1 !== 0;
    },
    __wbg_settingsDidChange_e9399f17eb947f73: function __wbg_settingsDidChange_e9399f17eb947f73(arg0) {
      var ret = arg0.settingsDidChange;
      return ret;
    },
    __wbg_signal_166e1da31adcac18: function __wbg_signal_166e1da31adcac18(arg0) {
      var ret = arg0.signal;
      return ret;
    },
    __wbg_stack_3b0d974bbf31e44f: function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
      var ret = arg1.stack;
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function __wbg_static_accessor_GLOBAL_8adb955bd33fac2f() {
      var ret = typeof global === 'undefined' ? null : global;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913() {
      var ret = typeof globalThis === 'undefined' ? null : globalThis;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_SELF_f207c857566db248: function __wbg_static_accessor_SELF_f207c857566db248() {
      var ret = typeof self === 'undefined' ? null : self;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function __wbg_static_accessor_WINDOW_bb9f1ba69d61b386() {
      var ret = typeof window === 'undefined' ? null : window;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_status_318629ab93a22955: function __wbg_status_318629ab93a22955(arg0) {
      var ret = arg0.status;
      return ret;
    },
    __wbg_stringify_5ae93966a84901ac: function __wbg_stringify_5ae93966a84901ac() {
      return handleError(function (arg0) {
        var ret = JSON.stringify(arg0);
        return ret;
      }, arguments);
    },
    __wbg_subarray_a068d24e39478a8a: function __wbg_subarray_a068d24e39478a8a(arg0, arg1, arg2) {
      var ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    },
    __wbg_target_7bc90f314634b37b: function __wbg_target_7bc90f314634b37b(arg0) {
      var ret = arg0.target;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_text_372f5b91442c50f9: function __wbg_text_372f5b91442c50f9() {
      return handleError(function (arg0) {
        var ret = arg0.text();
        return ret;
      }, arguments);
    },
    __wbg_then_098abe61755d12f6: function __wbg_then_098abe61755d12f6(arg0, arg1) {
      var ret = arg0.then(arg1);
      return ret;
    },
    __wbg_then_9e335f6dd892bc11: function __wbg_then_9e335f6dd892bc11(arg0, arg1, arg2) {
      var ret = arg0.then(arg1, arg2);
      return ret;
    },
    __wbg_toString_3272fa0dfd05dd87: function __wbg_toString_3272fa0dfd05dd87(arg0) {
      var ret = arg0.toString();
      return ret;
    },
    __wbg_transaction_1309b463c399d2b3: function __wbg_transaction_1309b463c399d2b3() {
      return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = arg0.transaction(getStringFromWasm0(arg1, arg2), __wbindgen_enum_IdbTransactionMode[arg3]);
        return ret;
      }, arguments);
    },
    __wbg_transaction_3223f7c8d0f40129: function __wbg_transaction_3223f7c8d0f40129() {
      return handleError(function (arg0, arg1, arg2) {
        var ret = arg0.transaction(arg1, __wbindgen_enum_IdbTransactionMode[arg2]);
        return ret;
      }, arguments);
    },
    __wbg_transaction_5eb9f1f16e8c769b: function __wbg_transaction_5eb9f1f16e8c769b(arg0) {
      var ret = arg0.transaction;
      return ret;
    },
    __wbg_transaction_fda57653957fee06: function __wbg_transaction_fda57653957fee06(arg0) {
      var ret = arg0.transaction;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_transmissionProgress_e6bcc2e854b5f802: function __wbg_transmissionProgress_e6bcc2e854b5f802(arg0) {
      var ret = arg0.transmissionProgress;
      return ret;
    },
    __wbg_uniffiClone_ea3eae8d2ac880af: function __wbg_uniffiClone_ea3eae8d2ac880af(arg0) {
      var ret = arg0.uniffiClone;
      return ret;
    },
    __wbg_uniffiFree_a31b5b679e61e0c2: function __wbg_uniffiFree_a31b5b679e61e0c2(arg0) {
      var ret = arg0.uniffiFree;
      return ret;
    },
    __wbg_update_1d0ab25d290bbcc1: function __wbg_update_1d0ab25d290bbcc1() {
      return handleError(function (arg0, arg1) {
        var ret = arg0.update(arg1);
        return ret;
      }, arguments);
    },
    __wbg_upperBound_482c10cb5e387300: function __wbg_upperBound_482c10cb5e387300() {
      return handleError(function (arg0, arg1) {
        var ret = IDBKeyRange.upperBound(arg0, arg1 !== 0);
        return ret;
      }, arguments);
    },
    __wbg_url_7fefc1820fba4e0c: function __wbg_url_7fefc1820fba4e0c(arg0, arg1) {
      var ret = arg1.url;
      var ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_value_21fc78aab0322612: function __wbg_value_21fc78aab0322612(arg0) {
      var ret = arg0.value;
      return ret;
    },
    __wbg_value_79629bd10d556879: function __wbg_value_79629bd10d556879() {
      return handleError(function (arg0) {
        var ret = arg0.value;
        return ret;
      }, arguments);
    },
    __wbg_version_6cdf210fcf448365: function __wbg_version_6cdf210fcf448365(arg0) {
      var ret = arg0.version;
      return ret;
    },
    __wbg_versions_a8a74c7ca68bfe73: function __wbg_versions_a8a74c7ca68bfe73(arg0) {
      var ret = arg0.versions;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function __wbindgen_cast_0000000000000001(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 10072, function: Function { arguments: [NamedExternref("IDBVersionChangeEvent")], shim_idx: 10073, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h14b013d45f8bf66a, wasm_bindgen__convert__closures_____invoke__h4747a12f812ee37e);
      return ret;
    },
    __wbindgen_cast_0000000000000002: function __wbindgen_cast_0000000000000002(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 10134, function: Function { arguments: [NamedExternref("Event")], shim_idx: 10137, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hac5b08d9bd0e27af, wasm_bindgen__convert__closures_____invoke__h1130fcb77f4fa08e);
      return ret;
    },
    __wbindgen_cast_0000000000000003: function __wbindgen_cast_0000000000000003(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 10134, function: Function { arguments: [], shim_idx: 10135, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hac5b08d9bd0e27af, wasm_bindgen__convert__closures_____invoke__hebe851867e87ed20);
      return ret;
    },
    __wbindgen_cast_0000000000000004: function __wbindgen_cast_0000000000000004(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 10267, function: Function { arguments: [], shim_idx: 10268, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h1365055770648565, wasm_bindgen__convert__closures_____invoke__h64c9f4cbc238e0ec);
      return ret;
    },
    __wbindgen_cast_0000000000000005: function __wbindgen_cast_0000000000000005(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 13625, function: Function { arguments: [Externref], shim_idx: 13626, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h0abad5bc6582b04e, wasm_bindgen__convert__closures_____invoke__hafb0f1e3f4c0c2c2);
      return ret;
    },
    __wbindgen_cast_0000000000000006: function __wbindgen_cast_0000000000000006(arg0, arg1) {
      // Cast intrinsic for `Closure(Closure { dtor_idx: 13684, function: Function { arguments: [], shim_idx: 13685, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
      var ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hb8a6b29f3dbab72a, wasm_bindgen__convert__closures_____invoke__h75b4972aca693d6a);
      return ret;
    },
    __wbindgen_cast_0000000000000007: function __wbindgen_cast_0000000000000007(arg0) {
      // Cast intrinsic for `F64 -> Externref`.
      var ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000008: function __wbindgen_cast_0000000000000008(arg0) {
      // Cast intrinsic for `I64 -> Externref`.
      var ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000009: function __wbindgen_cast_0000000000000009(arg0, arg1) {
      // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
      var ret = getArrayU8FromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_cast_000000000000000a: function __wbindgen_cast_000000000000000a(arg0, arg1) {
      // Cast intrinsic for `Ref(String) -> Externref`.
      var ret = getStringFromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_cast_000000000000000b: function __wbindgen_cast_000000000000000b(arg0) {
      // Cast intrinsic for `U64 -> Externref`.
      var ret = BigInt.asUintN(64, arg0);
      return ret;
    },
    __wbindgen_init_externref_table: function __wbindgen_init_externref_table() {
      var table = wasm.__wbindgen_externrefs;
      var offset = table.grow(4);
      table.set(0, undefined);
      table.set(offset + 0, undefined);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./index_bg.js": import0
  };
}
function wasm_bindgen__convert__closures_____invoke__hebe851867e87ed20(arg0, arg1) {
  wasm.wasm_bindgen__convert__closures_____invoke__hebe851867e87ed20(arg0, arg1);
}
function wasm_bindgen__convert__closures_____invoke__h64c9f4cbc238e0ec(arg0, arg1) {
  wasm.wasm_bindgen__convert__closures_____invoke__h64c9f4cbc238e0ec(arg0, arg1);
}
function wasm_bindgen__convert__closures_____invoke__h75b4972aca693d6a(arg0, arg1) {
  wasm.wasm_bindgen__convert__closures_____invoke__h75b4972aca693d6a(arg0, arg1);
}
function wasm_bindgen__convert__closures_____invoke__h1130fcb77f4fa08e(arg0, arg1, arg2) {
  wasm.wasm_bindgen__convert__closures_____invoke__h1130fcb77f4fa08e(arg0, arg1, arg2);
}
function wasm_bindgen__convert__closures_____invoke__h4747a12f812ee37e(arg0, arg1, arg2) {
  var ret = wasm.wasm_bindgen__convert__closures_____invoke__h4747a12f812ee37e(arg0, arg1, arg2);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function wasm_bindgen__convert__closures_____invoke__hafb0f1e3f4c0c2c2(arg0, arg1, arg2) {
  var ret = wasm.wasm_bindgen__convert__closures_____invoke__hafb0f1e3f4c0c2c2(arg0, arg1, arg2);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
var __wbindgen_enum_IdbCursorDirection = ["next", "nextunique", "prev", "prevunique"];
var __wbindgen_enum_IdbRequestReadyState = ["pending", "done"];
var __wbindgen_enum_IdbTransactionMode = ["readonly", "readwrite", "versionchange", "readwriteflush", "cleanup"];
var __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];
var __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];
var __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
var RustCallStatusFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: function register() {},
  unregister: function unregister() {}
} : new FinalizationRegistry(function (ptr) {
  return wasm.__wbg_rustcallstatus_free(ptr >>> 0, 1);
});
function addToExternrefTable0(obj) {
  var idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error("expected instance of ".concat(klass.name));
  }
}
var CLOSURE_DTORS = typeof FinalizationRegistry === 'undefined' ? {
  register: function register() {},
  unregister: function unregister() {}
} : new FinalizationRegistry(function (state) {
  return state.dtor(state.a, state.b);
});
function debugString(val) {
  // primitive types
  var type = _typeof(val);
  if (type == 'number' || type == 'boolean' || val == null) {
    return "".concat(val);
  }
  if (type == 'string') {
    return "\"".concat(val, "\"");
  }
  if (type == 'symbol') {
    var description = val.description;
    if (description == null) {
      return 'Symbol';
    } else {
      return "Symbol(".concat(description, ")");
    }
  }
  if (type == 'function') {
    var name = val.name;
    if (typeof name == 'string' && name.length > 0) {
      return "Function(".concat(name, ")");
    } else {
      return 'Function';
    }
  }
  // objects
  if (Array.isArray(val)) {
    var length = val.length;
    var debug = '[';
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (var i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }
    debug += ']';
    return debug;
  }
  // Test for built-in
  var builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  var className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  }
  // errors
  if (val instanceof Error) {
    return "".concat(val.name, ": ").concat(val.message, "\n").concat(val.stack);
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return decodeText(ptr, len);
}
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    var idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === undefined || x === null;
}
function makeMutClosure(arg0, arg1, dtor, f) {
  var state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor: dtor
  };
  var _real = function real() {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    var a = state.a;
    state.a = 0;
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return f.apply(void 0, [a, state.b].concat(args));
    } finally {
      state.a = a;
      _real._wbg_cb_unref();
    }
  };
  _real._wbg_cb_unref = function () {
    if (--state.cnt === 0) {
      state.dtor(state.a, state.b);
      state.a = 0;
      CLOSURE_DTORS.unregister(state);
    }
  };
  CLOSURE_DTORS.register(_real, state, state);
  return _real;
}
function passArray8ToWasm0(arg, malloc) {
  var ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);
    var _ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }
  var len = arg.length;
  var ptr = malloc(len, 1) >>> 0;
  var mem = getUint8ArrayMemory0();
  var offset = 0;
  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    var view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    var ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  var value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
var cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var MAX_SAFARI_DECODE_BYTES = 2146435072;
var numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder('utf-8', {
      ignoreBOM: true,
      fatal: true
    });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
var cachedTextEncoder = new TextEncoder();
if (!('encodeInto' in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function (arg, view) {
    var buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
var WASM_VECTOR_LEN = 0;
var wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  wasmModule = module;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        var validResponse = module.ok && expectedResponseType(module.type);
        if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    var bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    var instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return {
        instance: instance,
        module: module
      };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case 'basic':
      case 'cors':
      case 'default':
        return true;
    }
    return false;
  }
}
function initSync(module) {
  if (wasm !== undefined) return wasm;
  if (module !== undefined) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      var _module = module;
      module = _module.module;
    } else {
      console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
    }
  }
  var imports = __wbg_get_imports();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  var instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}
async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;
  if (module_or_path !== undefined) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      var _module_or_path = module_or_path;
      module_or_path = _module_or_path.module_or_path;
    } else {
      console.warn('using deprecated parameters for the initialization function; pass a single object instead');
    }
  }
  var imports = __wbg_get_imports();
  if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  var _await$__wbg_load = await __wbg_load(await module_or_path, imports),
    instance = _await$__wbg_load.instance,
    module = _await$__wbg_load.module;
  return __wbg_finalize_init(instance, module);
}
export { initSync, __wbg_init as default };
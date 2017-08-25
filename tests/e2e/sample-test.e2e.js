"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_dev_appium_1 = require("nativescript-dev-appium");
describe("scenario simple", function () {
    var defaultWaitTime = 5000;
    var driver;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nativescript_dev_appium_1.createDriver()];
                case 1:
                    driver = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    console.log("Driver quits!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should find an element", function () { return __awaiter(_this, void 0, void 0, function () {
        var tapButton, messageLabel, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, driver.findElementByText("TAP")];
                case 1:
                    tapButton = _d.sent();
                    return [4 /*yield*/, tapButton.click()];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, driver.findElementByText("41 taps left", 1 /* contains */)];
                case 3:
                    messageLabel = _d.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, messageLabel.text()];
                case 4:
                    _b.apply(_a, [_d.sent()]);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLXRlc3QuZTJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtcGxlLXRlc3QuZTJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFxQkc7O0FBckJILG1FQUFvRjtBQUVwRixRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFDeEIsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzdCLElBQUksTUFBb0IsQ0FBQztJQUV6QixNQUFNLENBQUM7Ozt3QkFDTSxxQkFBTSxzQ0FBWSxFQUFFLEVBQUE7O29CQUE3QixNQUFNLEdBQUcsU0FBb0IsQ0FBQzs7OztTQUNqQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUM7Ozt3QkFDRixxQkFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUE7O29CQUFuQixTQUFtQixDQUFDO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O1NBQ2hDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7Ozt3QkFDUCxxQkFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dDQUFyQyxTQUFxQztvQkFDdkQscUJBQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDSCxxQkFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGdCQUFzQixDQUFDLEVBQUE7O21DQUF0RSxTQUFzRTtvQkFDM0YsS0FBQSxDQUFBLEtBQUEsT0FBTyxDQUFBLENBQUMsR0FBRyxDQUFBO29CQUFDLHFCQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXJDLGNBQVksU0FBeUIsRUFBQyxDQUFDOzs7O1NBQzFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwaXVtRHJpdmVyLCBjcmVhdGVEcml2ZXIsIFNlYXJjaE9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRldi1hcHBpdW1cIjtcblxuZGVzY3JpYmUoXCJzY2VuYXJpbyBzaW1wbGVcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRXYWl0VGltZSA9IDUwMDA7XG4gICAgbGV0IGRyaXZlcjogQXBwaXVtRHJpdmVyO1xuXG4gICAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICAgICAgZHJpdmVyID0gYXdhaXQgY3JlYXRlRHJpdmVyKCk7XG4gICAgfSk7XG5cbiAgICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJpdmVyIHF1aXRzIVwiKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGZpbmQgYW4gZWxlbWVudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcEJ1dHRvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChcIlRBUFwiKTtcbiAgICAgICAgYXdhaXQgdGFwQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChcIjQxIHRhcHMgbGVmdFwiLCBTZWFyY2hPcHRpb25zLmNvbnRhaW5zKTtcbiAgICAgICAgY29uc29sZS5sb2coYXdhaXQgbWVzc2FnZUxhYmVsLnRleHQoKSk7XG4gICAgfSk7XG59KTsiXX0=
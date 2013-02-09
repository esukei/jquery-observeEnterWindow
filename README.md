# jquery.observeEnterWindow.js
要素がウィンドウに入った／出たかどうかを監視するプラグインです。要素がフェードしながら出てくるような演出や、画像の遅延読み込みなどに便利です。  
You can observe when the element enters or leaves the window. It's useful to framein effects, to make lazyload, e.t.c.

## demos
* [demo1 : Event Viewer](http://demos.s-uni.net/jquery-observeEnterWindow/)
* [demo2 : Effect](http://demos.s-uni.net/jquery-observeEnterWindow/effect.html)

## requirement
jQuery 1.8またはそれ以上  
jQuery 1.8 or later

## installation
jquery.jsの後にjquery.observeEnterWindow.jsを読み込みます。  
Load jquery.observeEnterWindow.js after loading jquery.js.

    <script src="/path/to/jquery.js"></script>
    <script src="/path/to/jquery.observeEnterWindow.js"></script>

## usage

### start observation
入退場を監視したい要素にobserveEnterWindowメソッドを実行します。  
Use observeWnterWindow method to start observating of an element enter/leave window.

    $('#target')
        .observeEnterWindow();

### attach event handler
onメソッドなどでハンドラを設定します。  
Attach event handler using on method.

    $('#target')
        .on('enterwindowstart', enterWindowStartHandler);

### the first event
observEnterWindowメソッドは、実行時点でウィンドウ内にある要素に対してイベントを発生させます。  
observEnterWindow method triggers event when the element in the window.

そのイベントを取得したい場合は、observeEnterWindowメソッドの前にonメソッドでハンドラを登録してください。  
If you want to handle the first event, run on method before observeenterwindow method.

    $('#target')
        .on('enterwindow', enterWindowHandler)
        .observeEnterWindow();

## events
発生するイベントは以下のとおりです。  
Events are below.

* enterwindowstart
* enterwindowend
* enterwindow
* leavewindowstart
* leavewindowend
* leavewindow
* movewindowframe

### enterwindowstart
要素がウィンドウに入り始めたときに発生します。  
Start entering window.

### enterwindowend
要素が完全にウィンドウに入ったときに発生します。  
Entered the window completely.

### enterwindow
要素が画面外からウィンドウに入ったときに1度だけ発生します。  
Triggered once when the element entered from out of the window.

### leavewindowstart
要素がウィンドウから出始めたときに発生します。  
Start leaving window.

### leavewindowend
要素が完全にウィンドウから出たときに発生します。  
Left the window completely.

### leavewindow
要素がウィンドウから出たときに発生します。判定条件は違いますが実質的にleavewindowendと同じです。  
Left the window.(This event is equal to leavewindowend.)

### movewindowframe 
要素がウィンドウのフレーム上を移動しているときに発生します。  
The element moving on the window's frame.

## Copyright & LICENSE
Copyright 2013 Satoru Kawahara  
[Licensed under MIT.](http://www.opensource.org/licenses/MIT)
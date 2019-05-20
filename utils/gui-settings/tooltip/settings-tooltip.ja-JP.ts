export const toolTips = new Map<keyof BilibiliEvolvedSettings, string>([
    ["useDefaultPlayerLayout", `デフォルト・プレーヤー・レイアウトを設定する. できるだけ、適切なページに設定（例えば、番組の放送ページに番組プレーヤーのレイアウトを設定する）、そうでない場合は効果がない可能性があります.
- 旧版: 伝統的なレイアウト
- 新版: 動画ページに黙認の新版レイアウト
注意: 伝統的なレイアウトでは、多くのスクリプト機能が適用されない.`],
    ["defaultPlayerLayout", `動画プレーヤーのレイアウトを設定する.`],
    ["defaultBangumiLayout", `番組プレーヤーのレイアウトを設定する.`],
    ["useDefaultPlayerMode", `デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば<span>常规</span>、<span>宽屏</span>、 <span>网页全屏</span>か<span>全屏</span>.`],
    ["defaultPlayerMode", `デフォルト・プレーヤー・モードが設定する.`],
    ["applyPlayerModeOnPlay", `再生時にモードを適用する、「いいえ」を選択すると、再生が開始されていないときに適用されます.`],
    ["autoLightOff", `初回放送時には、自動的に消灯モードに入り、再生終了後に自動的に点灯します.`],
    ["useDefaultVideoQuality", `動画を開くときに指定された画質を自動的に選択する. 映像の最高画質が選択された画質より低ければ、映像の最高画質を使用する.`],
    ["defaultVideoQuality", `自動的に選択された映像画質を設定する.`],
    ["useDefaultDanmakuSettings", `デフォルトで弾幕を開くかどうかを設定する.そして、「防挡字幕」と「智能防挡弹幕」を覚えておくかどうかを設定できる.`],
    ["enableDanmaku", `弾幕がデフォルトで開くかどうかを制御する.`],
    ["rememberDanmakuSettings", `弾幕ブロックの設定を覚えるかどうかを制御する、「防挡字幕」と「智能防挡弹幕」を含まれています.これらの設定を動画制御欄で変更すると、すべでの動画にデフォルトでこれらの設定が使用されます.`],
    ["expandDanmakuList", `新版レイアウトでは、他のおすすめ動画が表示されるようにデフォルトで弾幕リストが折りたたまれています.この機能を有効にすると、動画が読み込まれるたびに弾幕リストが自動的に展開されます.`],
    ["expandDescription", `長すぎる動画概要欄はデフォルトで折りたたまれています、この機能を有効にすると完全な動画概要欄が強制的に展開されます.`],
    ["autoContinue", `動画再生時に視聴履歴が検出されると(<span>前回の见た...</span>情報)、自動的に対応する時間に再生される.`],
    ["allowJumpContinue", `履歴のセット数が現在開いているページと矛盾している場合でも、自動的にジャンプします.`],
    ["autoPlay", `動画ページに入ると、自動的に動画の再生が開始されます.`],
    ["skipChargeList", `エンディングの「充电鸣谢」を自動スキップ.`],
    ["framePlayback", `プレーヤーの時間に右側に2つのボタンが追加されました.動画の時間を細かく調整するために使用される. キーボードショートカットに対応します<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd>. (伝統的なレイアウトでキーボードショートカットのみ使用でき、ボタンは表示されません)`],
    ["videoScreenshot", `プレーヤーの時間に右側に1つのボタンが追加されました.動画スクリーンショットを使用されます. キーボードショートカットに対応します<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>. (伝統的なレイアウトでキーボードショートカットのみ使用でき、ボタンは表示されません)`],
    ["playerFocus", `動画/番組の放送ページに入る時、プレーヤーに自動的に移動する.`],
    ["playerFocusOffset", `移動時の垂直オフセット、単位はピクセル(px).`],
    ["outerWatchlater", `動画放送ページの<span>稍后再看</span>を外に移動します.`],
    ["customStyleColor", `頂欄(スタイルの調整が有効な場合）とダークテーマのテーマ色で埋める、カラープレビューサークルをクリックして、设定の16種類のテーマカラーにできるの、右側のテキストボックスに任意の有効な16進数のカラー値を直接入力することもできます.(<span>#rrggbb</span>或<span>#rgb</span>).`],
    ["blurBackgroundOpacity", `设置顶栏对横幅的透明度(0~1), 数值越高顶栏越淡, 当横幅关闭时此选项无效.`],
    ["customNavbar", `カスタム頂欄を使用する.伝統的な頂欄に取って代わる.メインステーション専用です.「生放送」、「アルバム」、「会員購」などには影響しません.`],
    ["customNavbarFill", `テーマ色で頂欄を埋める.`],
    ["allNavbarFill", `テーマ色で他の頂欄を埋める.「生放送」、「アルバム」、「会員購」などが含まれています.`],
    ["customNavbarShadow", `頂欄に投影効果を追加する.`],
    ["customNavbarCompact", `トップページにコンパクトなレイアウトを使する.コンパクトなレイアウトはより小さなスペースを使用し、そして動画のタイトルが長すぎる場合に後者の部分を省略するための 「...」を使用する.`],
    ["customNavbarBlur", `トップの横断幕が存在する場合は、背景のぼかし効果を使用します.`],
    ["useDarkStyle", `ダークテーマでは、ページの明るい部分が暗い色に変わり、夜間の視聴に最適な表示になります.そして多くのテーマカラーを適用します.ぜひお試しください.`],
    ["darkSchedule", `ダークテーマを使用して计画タイムを設定する.この期間を開始または終了すると、ダークテーマは自動的にオンまたはオフになり、終了時刻は開始時刻より短く、翌日と見なされます.例えば<span>18:00</span>から<span>6:00</span>夜の18：00から翌日の6：00までを表しています.`],
    ["darkScheduleStart", `計画期間の開始時刻を設定する.`],
    ["darkScheduleEnd", `計画期間の終了時刻を設定する.`],
    ["compactLayout", `ホームページでコンパクトレイアウトを使用するかどうかを設定します.動画の間隔が狭くなり、フィレットが切り取られ、カテゴリ欄のアイコンは高解像度版を使用します.`],
    ["useCommentStyle", `- 人気コメントのアバターの下にある「フォロー」ボタンを削除します
- ユーザーの「レベル」アイコンの削除します
- 発送源の情報を削除(例えば<span>来自安卓客户端</span>)
- 送信時刻は右上に移動します
- ビットアイコンはすべてベクトルアイコンを入れ替えており、高解像度の画面はぼやけません．
注釈:「フォロー」と「レベル」アイコンはマウスでアバタ上に置くことで，ポップアップした資料カードに表示することができる.`],
    ["simplifyLiveroom", `- 「老爷」アイコンを隠す
- 「勲章」アイコンを隠す
- 「肩書き」アイコンを隠す
- 「レベル」アイコンを隠す
- 「艦長」アイコンを隠す
- 全域放送を隠す
- ウェルカムメッセージを隠す (例えば、「xxx老爷进入直播间」)
- 抽選のヒントを隠す (例えば、「艦長」を開通する、「小飞船」を抽選など)
- 配信ルームの特別な背景を無効にする（ダークテーマでは、デフォルトでは特殊な背景も無効になっています）
各項目は、非表示にするかどうかを<span>附加功能</span>の中で個別に選択することができる.`],
    ["preserveRank", `控制是否在搜索框左侧显示排行榜图标.`],
    ["hideBanner", `トップページの横断幕を非表示.`],
    ["blurVideoControl", `動画制御欄の背景をぼかします.伝統的な陰影効果は無効になります.`],
    ["playerShadow", `プレーヤーにテーマカラーの投影の追加する.`],
    ["narrowDanmaku", `ウェブの全画面表示されている場合は、幅が狭すぎても弾幕欄を強制的に保持し.この場合には右側の機能ボタンが境界線を押し出してしまう可能性があることに注意する.`],
    ["customControlBackground", `動画制御欄に半透明な黒を付ける、伝統的な陰影効果を置き換える.`],
    ["customControlBackgroundOpacity", `制御欄に黒の不透明度（0～1）を設定し、数値が大きくなるほど黒が濃くなるように設定します.`],
    ["harunaScale", `スクリーンDPIによって、配信ルームの看板娘のサイズをスケーリングして、ピクセルの解像度を高めます.`],
    ["removeLiveWatermark", `生放送時、隅の透かしを削除する.`],
    ["removeVideoTopMask", `マウスが通過したら、動画の右上隅にあるタイトル層を削除します.`],
    ["hideOldEntry", `放送ページの右側<span>返回旧版</span>を隠す.`],
    ["hideBangumiReviews", `番組ページの採点区を隠す.`],
    ["removeAds", `ビリビリのさまざまな広告を削除する.ホームページのプロモーションモジュール、モバイルアプリのおすすめ、動画ページの右側にある広告などが含まれます.`],
    ["watchLaterRedirect", `「後で見る」のリンクを通常の再生ページに変更して、新版レイアウトの再生ページを使用する.`],
    ["favoritesRedirect", `個人センターの「お気に入り」の動画を通常の再生ページに変更して、「お気に入り」再生の放送ページではなく.`],
    ["hideTopSearch", `検索欄の推薦語を<span>搜索</span>に置き換える.`],
    ["fullTweetsTitle", `頂欄の情報プレビューページでは、常に完全なタイトルが展開されます.`],
    ["fullPageTitle", `動画選集一覧では、常に完全なタイトルが展開されます.`],
    ["showDeadVideoTitle", `在个人空间中, 为已失效视频恢复标题和封面.`],
    ["useBiliplusRedirect", `将失效视频重定向到BiliPlus.`],
    ["biliplusRedirect", `動画、番組、個人センターページで、追加機能<span>转到BiliPlus</span>をクリックして、BiliPlusの対応するページに移動します.`],
    ["imageResolution", `スクリーンDPIによって、より高い解像度の画像を読み込む.（例えば、スクリーンのDPIが200％に調整されている場合、解像度は2倍になり、読み込み時間は長くなります.)`],
    ["oldTweets", `「新版レイアウトの情報」リンクを 「旧版レイアウトの情報」に置き換え、追加機能で 「新版レイアウトの情報」/「旧版レイアウトの情報」を切り替えます.`],
    ["i18n", `インタフェースの一般的なテキストの翻訳を提供する.`],
    ["i18nLanguage", `翻訳言語`],
    ["touchNavBar", `頂欄の右側の1級リンクを削除します(<span>大会員</span>から<span>履歴</span>まで).タッチスクリーンデバイスですばやく情報を便利にします.削除されたリンクページはそれぞれのプレビューの中から<span>查看更多</span>に入ることができます.`],
    ["comboLike", `「素質三連」（「いいね」を長押した）のタッチサポートを有効にする.`],
    ["touchVideoPlayer", `制御欄のボタン間隔を大きくして、タッチ操作をより正確にする.プレーヤーのタッチサポートを有効にする:
- 左右にスワイプして再生の進行状況を調整します
- 上下にスワイプして音量を調整します
- 進行状況の調整は左上と右上でキャンセルできます
- 異なる位置にスワイプすると、3つの異なる感度を使用できます.`],
    ["touchVideoPlayerAnimation", `タッチ調整のヒントボックスにアニメーションの表示と非表示のどうかを決定します.このアニメーションはフレームがドロップされる可能性があります.`],
    ["touchVideoPlayerDoubleTapControl", `操作方法を変更する.クリック:制御欄を表示/非表示, ダブルクリック放送/一時停止.`],
    ["toast", `ウェブページの左下隅に表示スクリプトからのメッセージ、例えば更新通知の送信、エラーメッセージなどです.`],
    ["toastInternalError", `オープンしたら、エラーメッセージは詳細な技術的エラー情報とスタック追跡を表示します.これは通常問題発生の原因を正確に確定するために使用されます.だから、問題を報告する時にこれらの情報はとても役に立ちます.`],
    ["useCache", `スクリプトの読み込み速度を上げるためにキャッシュを使う.`],
]);
export default {
    export: { toolTips },
};
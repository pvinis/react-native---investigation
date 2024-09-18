// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sheet = new CSSStyleSheet();
sheet.replaceSync(':root {}');
const style = sheet.cssRules[0].style;

style.setProperty('--image-file-accelerometer-bottom', 'url(\"' + new URL('./accelerometer-bottom.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-accelerometer-left', 'url(\"' + new URL('./accelerometer-left.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-accelerometer-right', 'url(\"' + new URL('./accelerometer-right.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-accelerometer-top', 'url(\"' + new URL('./accelerometer-top.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-chromeLeft', 'url(\"' + new URL('./chromeLeft.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-chromeMiddle', 'url(\"' + new URL('./chromeMiddle.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-chromeRight', 'url(\"' + new URL('./chromeRight.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-cssoverview_icons_2x', 'url(\"' + new URL('./cssoverview_icons_2x.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-favicon', 'url(\"' + new URL('./favicon.ico', import.meta.url).toString() + '\")');
style.setProperty('--image-file-navigationControls_2x', 'url(\"' + new URL('./navigationControls_2x.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-navigationControls', 'url(\"' + new URL('./navigationControls.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-nodeIcon', 'url(\"' + new URL('./nodeIcon.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-popoverArrows', 'url(\"' + new URL('./popoverArrows.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-react_native/learn-debugging-basics', 'url(\"' + new URL('./react_native/learn-debugging-basics.jpg', import.meta.url).toString() + '\")');
style.setProperty('--image-file-react_native/learn-native-debugging', 'url(\"' + new URL('./react_native/learn-native-debugging.jpg', import.meta.url).toString() + '\")');
style.setProperty('--image-file-react_native/learn-react-devtools', 'url(\"' + new URL('./react_native/learn-react-devtools.jpg', import.meta.url).toString() + '\")');
style.setProperty('--image-file-react_native/learn-react-native-devtools', 'url(\"' + new URL('./react_native/learn-react-native-devtools.jpg', import.meta.url).toString() + '\")');
style.setProperty('--image-file-react_native/welcomeIcon', 'url(\"' + new URL('./react_native/welcomeIcon.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-toolbarResizerVertical', 'url(\"' + new URL('./toolbarResizerVertical.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-touchCursor_2x', 'url(\"' + new URL('./touchCursor_2x.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-touchCursor', 'url(\"' + new URL('./touchCursor.png', import.meta.url).toString() + '\")');
style.setProperty('--image-file-whatsnew', 'url(\"' + new URL('./whatsnew.avif', import.meta.url).toString() + '\")');
style.setProperty('--image-file-3d-center', 'url(\"' + new URL(new URL('3d-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-3d-pan', 'url(\"' + new URL(new URL('3d-pan.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-3d-rotate', 'url(\"' + new URL(new URL('3d-rotate.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-accelerometer-back', 'url(\"' + new URL(new URL('accelerometer-back.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-accelerometer-front', 'url(\"' + new URL(new URL('accelerometer-front.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-center', 'url(\"' + new URL(new URL('align-content-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-end', 'url(\"' + new URL(new URL('align-content-end.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-space-around', 'url(\"' + new URL(new URL('align-content-space-around.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-space-between', 'url(\"' + new URL(new URL('align-content-space-between.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-space-evenly', 'url(\"' + new URL(new URL('align-content-space-evenly.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-start', 'url(\"' + new URL(new URL('align-content-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-content-stretch', 'url(\"' + new URL(new URL('align-content-stretch.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-items-baseline', 'url(\"' + new URL(new URL('align-items-baseline.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-items-center', 'url(\"' + new URL(new URL('align-items-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-items-end', 'url(\"' + new URL(new URL('align-items-end.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-items-start', 'url(\"' + new URL(new URL('align-items-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-items-stretch', 'url(\"' + new URL(new URL('align-items-stretch.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-self-center', 'url(\"' + new URL(new URL('align-self-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-self-end', 'url(\"' + new URL(new URL('align-self-end.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-self-start', 'url(\"' + new URL(new URL('align-self-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-align-self-stretch', 'url(\"' + new URL(new URL('align-self-stretch.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-back', 'url(\"' + new URL(new URL('arrow-back.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-down', 'url(\"' + new URL(new URL('arrow-down.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-drop-down-dark', 'url(\"' + new URL(new URL('arrow-drop-down-dark.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-drop-down-light', 'url(\"' + new URL(new URL('arrow-drop-down-light.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-forward', 'url(\"' + new URL(new URL('arrow-forward.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-up-down-circle', 'url(\"' + new URL(new URL('arrow-up-down-circle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-up-down', 'url(\"' + new URL(new URL('arrow-up-down.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-arrow-up', 'url(\"' + new URL(new URL('arrow-up.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bell', 'url(\"' + new URL(new URL('bell.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bezier-curve-filled', 'url(\"' + new URL(new URL('bezier-curve-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bin', 'url(\"' + new URL(new URL('bin.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bottom-panel-close', 'url(\"' + new URL(new URL('bottom-panel-close.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bottom-panel-open', 'url(\"' + new URL(new URL('bottom-panel-open.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-brackets', 'url(\"' + new URL(new URL('brackets.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-breakpoint-circle', 'url(\"' + new URL(new URL('breakpoint-circle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-breakpoint-crossed-filled', 'url(\"' + new URL(new URL('breakpoint-crossed-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-breakpoint-crossed', 'url(\"' + new URL(new URL('breakpoint-crossed.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-brush-filled', 'url(\"' + new URL(new URL('brush-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-brush', 'url(\"' + new URL(new URL('brush.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bug', 'url(\"' + new URL(new URL('bug.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-bundle', 'url(\"' + new URL(new URL('bundle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-check-circle', 'url(\"' + new URL(new URL('check-circle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-check-double', 'url(\"' + new URL(new URL('check-double.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-checker', 'url(\"' + new URL(new URL('checker.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-checkmark', 'url(\"' + new URL(new URL('checkmark.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-double-right', 'url(\"' + new URL(new URL('chevron-double-right.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-down', 'url(\"' + new URL(new URL('chevron-down.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-left-dot', 'url(\"' + new URL(new URL('chevron-left-dot.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-left', 'url(\"' + new URL(new URL('chevron-left.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-right', 'url(\"' + new URL(new URL('chevron-right.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-chevron-up', 'url(\"' + new URL(new URL('chevron-up.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-clear-list', 'url(\"' + new URL(new URL('clear-list.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-clear', 'url(\"' + new URL(new URL('clear.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-cloud', 'url(\"' + new URL(new URL('cloud.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-code-circle', 'url(\"' + new URL(new URL('code-circle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-code', 'url(\"' + new URL(new URL('code.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-colon', 'url(\"' + new URL(new URL('colon.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-color-picker-filled', 'url(\"' + new URL(new URL('color-picker-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-color-picker', 'url(\"' + new URL(new URL('color-picker.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-console-conditional-breakpoint', 'url(\"' + new URL(new URL('console-conditional-breakpoint.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-console-logpoint', 'url(\"' + new URL(new URL('console-logpoint.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-cookie', 'url(\"' + new URL(new URL('cookie.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-copy', 'url(\"' + new URL(new URL('copy.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-credit-card', 'url(\"' + new URL(new URL('credit-card.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-cross-circle-filled', 'url(\"' + new URL(new URL('cross-circle-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-cross-circle', 'url(\"' + new URL(new URL('cross-circle.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-cross', 'url(\"' + new URL(new URL('cross.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-custom-typography', 'url(\"' + new URL(new URL('custom-typography.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-database', 'url(\"' + new URL(new URL('database.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-deployed', 'url(\"' + new URL(new URL('deployed.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-device-fold', 'url(\"' + new URL(new URL('device-fold.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-devices', 'url(\"' + new URL(new URL('devices.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dock-bottom', 'url(\"' + new URL(new URL('dock-bottom.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dock-left', 'url(\"' + new URL(new URL('dock-left.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dock-right', 'url(\"' + new URL(new URL('dock-right.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dock-window', 'url(\"' + new URL(new URL('dock-window.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-document', 'url(\"' + new URL(new URL('document.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dog-paw', 'url(\"' + new URL(new URL('dog-paw.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dots-horizontal', 'url(\"' + new URL(new URL('dots-horizontal.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-dots-vertical', 'url(\"' + new URL(new URL('dots-vertical.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-download', 'url(\"' + new URL(new URL('download.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-edit', 'url(\"' + new URL(new URL('edit.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-empty', 'url(\"' + new URL(new URL('empty.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-errorWave', 'url(\"' + new URL(new URL('errorWave.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-exclamation', 'url(\"' + new URL(new URL('exclamation.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-experiment-check', 'url(\"' + new URL(new URL('experiment-check.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-experiment', 'url(\"' + new URL(new URL('experiment.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-extension', 'url(\"' + new URL(new URL('extension.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-eye', 'url(\"' + new URL(new URL('eye.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-document', 'url(\"' + new URL(new URL('file-document.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-fetch-xhr', 'url(\"' + new URL(new URL('file-fetch-xhr.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-font', 'url(\"' + new URL(new URL('file-font.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-generic', 'url(\"' + new URL(new URL('file-generic.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-image', 'url(\"' + new URL(new URL('file-image.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-json', 'url(\"' + new URL(new URL('file-json.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-manifest', 'url(\"' + new URL(new URL('file-manifest.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-media', 'url(\"' + new URL(new URL('file-media.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-script', 'url(\"' + new URL(new URL('file-script.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-snippet', 'url(\"' + new URL(new URL('file-snippet.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-stylesheet', 'url(\"' + new URL(new URL('file-stylesheet.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-wasm', 'url(\"' + new URL(new URL('file-wasm.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-file-websocket', 'url(\"' + new URL(new URL('file-websocket.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-filter-clear', 'url(\"' + new URL(new URL('filter-clear.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-filter-filled', 'url(\"' + new URL(new URL('filter-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-filter', 'url(\"' + new URL(new URL('filter.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-flex-direction', 'url(\"' + new URL(new URL('flex-direction.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-flex-no-wrap', 'url(\"' + new URL(new URL('flex-no-wrap.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-flex-wrap', 'url(\"' + new URL(new URL('flex-wrap.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-flow', 'url(\"' + new URL(new URL('flow.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-fold-more', 'url(\"' + new URL(new URL('fold-more.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-folder', 'url(\"' + new URL(new URL('folder.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-frame-crossed', 'url(\"' + new URL(new URL('frame-crossed.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-frame-icon', 'url(\"' + new URL(new URL('frame-icon.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-frame', 'url(\"' + new URL(new URL('frame.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-gear-filled', 'url(\"' + new URL(new URL('gear-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-gear', 'url(\"' + new URL(new URL('gear.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-gears', 'url(\"' + new URL(new URL('gears.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-goto-filled', 'url(\"' + new URL(new URL('goto-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-heap-snapshot', 'url(\"' + new URL(new URL('heap-snapshot.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-heap-snapshots', 'url(\"' + new URL(new URL('heap-snapshots.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-help', 'url(\"' + new URL(new URL('help.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-iframe-crossed', 'url(\"' + new URL(new URL('iframe-crossed.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-iframe', 'url(\"' + new URL(new URL('iframe.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-import', 'url(\"' + new URL(new URL('import.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-info-filled', 'url(\"' + new URL(new URL('info-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-info', 'url(\"' + new URL(new URL('info.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-issue-cross-filled', 'url(\"' + new URL(new URL('issue-cross-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-issue-exclamation-filled', 'url(\"' + new URL(new URL('issue-exclamation-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-issue-questionmark-filled', 'url(\"' + new URL(new URL('issue-questionmark-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-issue-text-filled', 'url(\"' + new URL(new URL('issue-text-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-center', 'url(\"' + new URL(new URL('justify-content-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-end', 'url(\"' + new URL(new URL('justify-content-end.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-space-around', 'url(\"' + new URL(new URL('justify-content-space-around.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-space-between', 'url(\"' + new URL(new URL('justify-content-space-between.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-space-evenly', 'url(\"' + new URL(new URL('justify-content-space-evenly.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-content-start', 'url(\"' + new URL(new URL('justify-content-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-items-center', 'url(\"' + new URL(new URL('justify-items-center.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-items-end', 'url(\"' + new URL(new URL('justify-items-end.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-items-start', 'url(\"' + new URL(new URL('justify-items-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-justify-items-stretch', 'url(\"' + new URL(new URL('justify-items-stretch.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-keyboard-pen', 'url(\"' + new URL(new URL('keyboard-pen.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-large-arrow-right-filled', 'url(\"' + new URL(new URL('large-arrow-right-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-layers-filled', 'url(\"' + new URL(new URL('layers-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-layers', 'url(\"' + new URL(new URL('layers.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-left-panel-close', 'url(\"' + new URL(new URL('left-panel-close.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-left-panel-open', 'url(\"' + new URL(new URL('left-panel-open.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-lightbulb-spark', 'url(\"' + new URL(new URL('lightbulb-spark.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-lighthouse_logo', 'url(\"' + new URL(new URL('lighthouse_logo.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-list', 'url(\"' + new URL(new URL('list.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-match-whole-word', 'url(\"' + new URL(new URL('match-whole-word.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-memory', 'url(\"' + new URL(new URL('memory.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-minus', 'url(\"' + new URL(new URL('minus.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-mop', 'url(\"' + new URL(new URL('mop.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-mouse', 'url(\"' + new URL(new URL('mouse.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-network-settings', 'url(\"' + new URL(new URL('network-settings.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-open-externally', 'url(\"' + new URL(new URL('open-externally.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-pause', 'url(\"' + new URL(new URL('pause.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-performance', 'url(\"' + new URL(new URL('performance.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-person', 'url(\"' + new URL(new URL('person.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-play', 'url(\"' + new URL(new URL('play.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-plus', 'url(\"' + new URL(new URL('plus.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-popup', 'url(\"' + new URL(new URL('popup.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-preview_feature_video_thumbnail', 'url(\"' + new URL(new URL('preview_feature_video_thumbnail.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-profile', 'url(\"' + new URL(new URL('profile.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-record-start', 'url(\"' + new URL(new URL('record-start.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-record-stop', 'url(\"' + new URL(new URL('record-stop.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-redo', 'url(\"' + new URL(new URL('redo.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-refresh', 'url(\"' + new URL(new URL('refresh.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-replace', 'url(\"' + new URL(new URL('replace.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-replay', 'url(\"' + new URL(new URL('replay.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-resizeDiagonal', 'url(\"' + new URL(new URL('resizeDiagonal.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-resizeHorizontal', 'url(\"' + new URL(new URL('resizeHorizontal.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-resizeVertical', 'url(\"' + new URL(new URL('resizeVertical.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-resume', 'url(\"' + new URL(new URL('resume.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-review', 'url(\"' + new URL(new URL('review.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-right-panel-close', 'url(\"' + new URL(new URL('right-panel-close.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-right-panel-open', 'url(\"' + new URL(new URL('right-panel-open.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-scissors', 'url(\"' + new URL(new URL('scissors.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-screen-rotation', 'url(\"' + new URL(new URL('screen-rotation.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-search', 'url(\"' + new URL(new URL('search.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-securityIcons', 'url(\"' + new URL(new URL('securityIcons.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-select-element', 'url(\"' + new URL(new URL('select-element.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-send', 'url(\"' + new URL(new URL('send.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-shadow', 'url(\"' + new URL(new URL('shadow.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-small-status-dot', 'url(\"' + new URL(new URL('small-status-dot.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-snippet', 'url(\"' + new URL(new URL('snippet.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-spark-info', 'url(\"' + new URL(new URL('spark-info.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-spark', 'url(\"' + new URL(new URL('spark.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-star', 'url(\"' + new URL(new URL('star.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-step-into', 'url(\"' + new URL(new URL('step-into.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-step-out', 'url(\"' + new URL(new URL('step-out.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-step-over', 'url(\"' + new URL(new URL('step-over.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-step', 'url(\"' + new URL(new URL('step.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-stop', 'url(\"' + new URL(new URL('stop.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-symbol', 'url(\"' + new URL(new URL('symbol.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-sync', 'url(\"' + new URL(new URL('sync.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-table', 'url(\"' + new URL(new URL('table.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-thumb-down', 'url(\"' + new URL(new URL('thumb-down.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-thumb-up', 'url(\"' + new URL(new URL('thumb-up.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-top-panel-close', 'url(\"' + new URL(new URL('top-panel-close.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-top-panel-open', 'url(\"' + new URL(new URL('top-panel-open.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-touch-app', 'url(\"' + new URL(new URL('touch-app.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-triangle-bottom-right', 'url(\"' + new URL(new URL('triangle-bottom-right.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-triangle-down', 'url(\"' + new URL(new URL('triangle-down.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-triangle-left', 'url(\"' + new URL(new URL('triangle-left.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-triangle-right', 'url(\"' + new URL(new URL('triangle-right.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-triangle-up', 'url(\"' + new URL(new URL('triangle-up.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-undo', 'url(\"' + new URL(new URL('undo.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-warning-filled', 'url(\"' + new URL(new URL('warning-filled.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-warning', 'url(\"' + new URL(new URL('warning.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-watch', 'url(\"' + new URL(new URL('watch.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-width', 'url(\"' + new URL(new URL('width.svg', import.meta.url).href, import.meta.url).toString() + '\")');
style.setProperty('--image-file-zoom-in', 'url(\"' + new URL(new URL('zoom-in.svg', import.meta.url).href, import.meta.url).toString() + '\")');

document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

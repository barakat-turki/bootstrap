self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "8ff99520a962869cb3b6b20d1b5dbfac"
  },
  {
    "url": "assets/css/docs.rtl.min.css",
    "revision": "64bbee62e98ac3d7fce3d8d65291b1db"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "ac8702c660a236c2e9236eec0bcea6ed"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "c08f239f0942146feddd3f078fec831b"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "fe80ecce8d355bac77f7bd95639ad04a"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "4de108c33799a18cec3362c52e333eff"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "29a16726680195da6a8c78f234880607"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "6ba2de34dbaa851bb52c96c7bd33352e"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "7dc6d49bddb587f471ed62358e743727"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "4e559333725069a33a9d0f3387652ea5"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "1726431721d064fb3f45509a6f6b0d91"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "13cae83d4d06ad11508feea0fda1db6b"
  },
  {
    "url": "dist/css/rtl/bootstrap-grid.css",
    "revision": "c39c2b0e3bc56dff4beef9d60cdd7456"
  },
  {
    "url": "dist/css/rtl/bootstrap-grid.min.css",
    "revision": "aca64db9df6dc147b5a0fb60f13f261d"
  },
  {
    "url": "dist/css/rtl/bootstrap-reboot.css",
    "revision": "e5383ed38b01b59055814d33d4fba8eb"
  },
  {
    "url": "dist/css/rtl/bootstrap-reboot.min.css",
    "revision": "8946af65ccba6a7eb3be021c0d1cd9bc"
  },
  {
    "url": "dist/css/rtl/bootstrap.css",
    "revision": "69521f7d36932dec3a141b54a75e88ef"
  },
  {
    "url": "dist/css/rtl/bootstrap.min.css",
    "revision": "83820d8e1877154793a008c0595bb7ff"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ad13f30ade01fcbc77e6db8b7a13e0f2"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "3daed637834c42c65d0f6480a376a265"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "b429f4e6f81f99e4945745e2b80125c8"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "ddaac759ad489ab917860454b0f56de8"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "f61a06b08fa96215ff350677a7a33d67"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "c60a7adaba7190d1663f6a4d35b0505c"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "8587452b07c9f8508124514a9593d0e2"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "a6ca13063406150dad5a1bb2f6ec3dad"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "0d6344fc872bf4ac29f2aca92c427aaf"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "09938ed5a7821b9260b5453462647099"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "9a6f32c296f32ead12da565eb679ce4c"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "86f247ec51532112a1fcd7a7568d319d"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "8685a3f8edf682f72bef1020a6fe32a0"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "fa64410c4553ebbbf50f036f59243514"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "9ac3a24f9f50b948e91e349b1314b809"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "e82b3febc5e52cd3957f4e9ae103d43c"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "58f3dc754b45042ce6ae184af7aed6a3"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "80d0df4e056f06d0af87dacc2290c997"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "5b75d84804962c282963c2dd9889ca37"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "510a2efd4f2e4db94b7c9387d30d734b"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "56f425a4bfc8dc23c6c5fa7540176f85"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "e3afc919f042da59900e4145d908430f"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "8f1d6425abc6eed1c0ec4767adc61a4d"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "8045bdc77908c11aa780924601859391"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "e3c0b52eea1d7f51b7d70f1f239e9a3a"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "0c309f7d5df6b7c4891de1de8053990c"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "535c3e9bffebec0be2dc58b9d2d4c400"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "5d70526958919383258abc67d65da543"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "c4f67a208ebf9ff5743d4a60ec3bbb5d"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "984ab6f7795e2a6f64a94b7e431f0093"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "079a4d75fe6ba862f09d66897ce056d0"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "46833e7184d0748a11d44da8b229889f"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "b5089d4529c956898c3280a5efe6562a"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "253254e8dcdd6a077f67faae884ea417"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "e4aa82b977b9e4dad3a22d19c28608b7"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "77b361e917b91982e90d26032c805317"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "6bd99735922a9c7426ca36a0ed470fff"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "0b10889cf48dadabd3acf7f4234a5704"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "26b5922bb28d591065aa7e80db7c37f5"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.0/examples/album/album.rtl.css",
    "revision": "de3a825b44551bc519459e18d3367e82"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "e12ac78f257f4c2e509a858125135fd9"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "cb98d3e8033940a716641516d2cb857b"
  },
  {
    "url": "docs/4.0/examples/blog/blog.rtl.css",
    "revision": "e8d60b024692a5f2b6ebe6d7543183a7"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "f6cfe1e36f86b9850b70082b92502a82"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.rtl.css",
    "revision": "11d6db240c79416474fdc0a802796c77"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "2f260a4316176bff067da6efd0c2ec1d"
  },
  {
    "url": "docs/4.0/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.0/examples/checkout/form-validation.rtl.css",
    "revision": "f0f44e117d0f35cb2f74a1ea2dcdea3f"
  },
  {
    "url": "docs/4.0/examples/checkout/index.html",
    "revision": "ba49394c254ca4ce39dd89c7c19ee210"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "61f7cbbe930976e62264268abe51ebd3"
  },
  {
    "url": "docs/4.0/examples/cover/cover.rtl.css",
    "revision": "d4574adce71d8775887c58d93752898f"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "2e4247f6d9eb5edc5f40504a9e32a897"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "a04ae1b7ceba4aaeb3bc7fe3c72a6d40"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.rtl.css",
    "revision": "25f3abeb4dde4226a51781f9b5f84640"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "c82661a8afa118b15eb3c634589b6651"
  },
  {
    "url": "docs/4.0/examples/floating-labels/floating-labels.css",
    "revision": "5a7fc5962d7981d2c5f9af28f785a0c5"
  },
  {
    "url": "docs/4.0/examples/floating-labels/floating-labels.rtl.css",
    "revision": "8b50e47916bcc6a0ad8b1385acc447fd"
  },
  {
    "url": "docs/4.0/examples/floating-labels/index.html",
    "revision": "375c1348432aeedbc85b53f600bd8b3f"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/grid.rtl.css",
    "revision": "eea27637358cad7de9490e8f40fb2073"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "7f69dfabda8398fa608bfe199703da7f"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "0a75ce47725eb58caa0f716bacf98e0c"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "26a8d9acec33d361b617ddbf7ad35daa"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.rtl.css",
    "revision": "954c5d9afc0022337388c8c574fbfee8"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "f9bb21ddba85935632a102dc3cd624a3"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/index.html",
    "revision": "85bf48c9c56f947e88d5c2d8f495fe83"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/navbar-top-fixed.rtl.css",
    "revision": "3795ee683268d2463f8077e061f1ed68"
  },
  {
    "url": "docs/4.0/examples/navbar-static/index.html",
    "revision": "69becd9ba87b4d8357e591cab0ad691a"
  },
  {
    "url": "docs/4.0/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbar-static/navbar-top.rtl.css",
    "revision": "c22d25d3ac79d51ca1ec137683fc61fc"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "ba7ac8ace28fbc0f1bbab36b476bbf59"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.rtl.css",
    "revision": "755557cc7dd15858e5b5dced956756f0"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "0dc2fdbb15acd53f7c258a7350adc04f"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "65b3d835fd0f90b00844adc8974be45b"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.rtl.css",
    "revision": "537706ce79b3b53a0b89e3bcdfe952fc"
  },
  {
    "url": "docs/4.0/examples/pricing/index.html",
    "revision": "d310ecd989d9d33edfdfba6d090fbd64"
  },
  {
    "url": "docs/4.0/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.0/examples/pricing/pricing.rtl.css",
    "revision": "034f5688a0becc6de97bddb09daf8bfe"
  },
  {
    "url": "docs/4.0/examples/product/index.html",
    "revision": "6eef94d8a121370056cdc25595a77e97"
  },
  {
    "url": "docs/4.0/examples/product/product.css",
    "revision": "139ada632a48dc6b96a46a265a2cc60c"
  },
  {
    "url": "docs/4.0/examples/product/product.rtl.css",
    "revision": "51fceb341e708ed18a167688c316baf6"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.0/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.0/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.0/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.0/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.0/examples/sign-in/index.html",
    "revision": "870710ee549aa8d40101d342486237fb"
  },
  {
    "url": "docs/4.0/examples/sign-in/signin.css",
    "revision": "9c798c2cdaef45f59a916c2051cbe197"
  },
  {
    "url": "docs/4.0/examples/sign-in/signin.rtl.css",
    "revision": "099c9bad557ce69bb1e87ccdd17cc09d"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "cf8adda99664a3b5c28b8747ee41d017"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.rtl.css",
    "revision": "08b5098cc5bf4e46708e3055b5026c04"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "f3122d768f9e4272ba9b4bc995cfffff"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.rtl.css",
    "revision": "47e9e7d69fa7870b40ce04d40f535b25"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "8ae1df56cc99b3faa1ee57aa8bc6f7d6"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.rtl.css",
    "revision": "e72e9fb8327fb802ecd8d9376027bd8e"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "771bd039735a80e37505cef05c0dadc7"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.rtl.css",
    "revision": "7ac43c9a782c61fccc0b98b2d6818ac8"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "0d4986b08e945657f6a65c7a8ff63704"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "40d1d8d832cd95894523aa6c63af07a0"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "04bce2eeb11ef3409905aff8edd852aa"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "8e3342dcf281777f38a606805e47996c"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "b296781c411e37fc5c4fb00c0dbcfc27"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "b48272a445caffbf73fa7539435863f9"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "1eae67fd733f368816faa53206938486"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "21ae774672233668405070b53ff57b4e"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "0ac4fa2eb5a3af49780c35bc4556164e"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "8c2a58355911b3912e64983b723310fa"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "38026d543dc8cf39754cb3be26c7ea40"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "5223b44f599c04153e1a3d4841277eed"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "5af09d5494e714b5732bb554179bbeda"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "0693fc95e728e677df09703a4e8f1ca2"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "3f9e5b1279ccedc134cb3beecafbd63d"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "c60a7adaba7190d1663f6a4d35b0505c"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "8c2a58355911b3912e64983b723310fa"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "eaab9bda399bbf6b7ed303b2f31f9498"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "133c43e89b33c6b9a24d4be4066bda58"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "6253946d8c0f60d47ef3c098c22390ef"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "a3ce8dc921d24467d147ae5afa8cff3c"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "6f627f62361dca136c5b65c0e089047a"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "4628e89f2b2dc360e4ab6a3906405b0e"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "c60a7adaba7190d1663f6a4d35b0505c"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "4782244e85ceaa42427b101b9409481f"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "2f542c82d33fd9e1a721b51f0aea4ddb"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "a7169aa4fb1359a1c8308f315d0b132c"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "d905902948c5766891cdd4a780772c0e"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "5a795e6eb32f277e47a4fc238d25a561"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "68c780a28ee9462cb58746e4ce4d397d"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "04487c30f0aeb05193e04f724905b682"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "92f7a77b798f2120431bcde3f4b0c528"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "332fc7f2c3efc8608f60a78ee919720f"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "7508bad117129552b6336cb9bd957bc4"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "348914ef09d77a2795f8e4b6ed885d64"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "c9f898637e97e127e082974da441bab5"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "f9b5f45ccf681fd355491d9e23d77615"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "cd2b0df51e1e1c6f7bbffe6bcc893286"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "658bffd524a35449322512f3ee04cd0e"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "97371a205394f375457109e90e3c2684"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "51f8a0e276d4d048967b0569cf2932bd"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "8c2a58355911b3912e64983b723310fa"
  },
  {
    "url": "docs/index.html",
    "revision": "8c2a58355911b3912e64983b723310fa"
  },
  {
    "url": "examples/index.html",
    "revision": "6ea4ba80a1f1802c5377b08a8f0864ef"
  },
  {
    "url": "index.html",
    "revision": "8754e85066b1fbd229507f49b305f048"
  },
  {
    "url": "redirects.json",
    "revision": "5d23f0b2e5a135c74cffe53c4ea3a634"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])

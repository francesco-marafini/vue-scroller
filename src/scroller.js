var conditionalScrollToBottom = (el) => {
    if (el.scrollHeight - el.scrollTop >= el.clientHeight) {
      // scroll to bottom
      if ((el.dataset.userHasScrolled == "false")) {
        el.scrollTop = el.scrollHeight - el.clientHeight; // triggers scroll event
      }
    }
};

Vue.directive('scroller', {
    bind: function(el, bindings, vnode) {
        el.dataset.userHasScrolled = false;
    },
    componentUpdated: function(el, bindings, vnode) {
        conditionalScrollToBottom(el);
    },
    inserted: function(el) {
        el.scrollTop = el.scrollHeight - el.clientHeight;
        el.addEventListener('scroll', function(evt) {
           el.dataset.userHasScrolled = (el.scrollTop < el.scrollHeight - el.clientHeight - 50);
        })
    }
});

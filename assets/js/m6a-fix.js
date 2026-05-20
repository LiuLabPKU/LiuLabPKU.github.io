/* Auto-fix m6A/N6-methyladenosine typography — safe version */
document.addEventListener('DOMContentLoaded', function() {
    function fixText(el) {
        if (!el || !el.innerHTML) return;
        // Only replace in text content, not inside tags
        var html = el.innerHTML;
        var changed = false;
        html = html.replace(/N6-methyladenosine/gi, '<em>N</em><sup>6</sup>-methyladenosine');
        html = html.replace(/N6-adenosine/gi, '<em>N</em><sup>6</sup>-adenosine');
        html = html.replace(/(?<!<[^>]*?)m6A(?!<)/g, 'm<sup>6</sup>A');
        if (html !== el.innerHTML) {
            el.innerHTML = html;
        }
    }
    // Fix specific containers to avoid breaking scripts
    var containers = document.querySelectorAll('.content, .pub-card, .member-hcard, .news-card, .pi-section, .join-content');
    containers.forEach(fixText);
    // Also fix general text areas
    var paras = document.querySelectorAll('p, li, h3, h4');
    paras.forEach(function(p) {
        if (!p.closest('script, style, .navbar, .footer')) fixText(p);
    });
});

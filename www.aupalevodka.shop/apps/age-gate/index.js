var d = document;
var w = window;
var logo = '';
    if ((!w.localStorage.getItem('age_confirmed') && !w.sessionStorage.getItem('age_confirmed')) || location.pathname === '/preview') {
    var h = d.getElementsByTagName('head')[0];
    var st = d.createElement('style');
    var btn_s = d.createTextNode('button.age-gate-btn { line-height: 1.5rem; height: 60px; font-weight: bold; border-radius: 3px; display: inline-block; border: 2px solid #000000; padding: 1rem 2rem; margin: 1em; text-decoration: none; color: #ffffff; font-family: sans-serif; font-size: 1em; cursor: pointer; text-align: center; transition: background 250ms ease-in-out, transform 150ms ease, color 250ms; -webkit-appearance: none; -moz-appearance: none; }  button.age-gate-yes-btn { background: #000000; color: #ffffff; } button.age-gate-no-btn { background: #ffffff; color: #000000 } button:hover.age-gate-no-btn, button:focus.age-gate-no-btn { background: #000000; color: #ffffff } button:hover.age-gate-yes-btn, button:hover.age-gate-yes-btn { background: #ffffff; color: #000000 } button.age-gate-btn:focus { outline: 0px solid #fff; outline-offset: -4px; } button.age-gate-btn:active { } .no-link { cursor: pointer;font-family:-apple-system,BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif; } .no-link:hover { text-decoration: underline }');

    st.type = 'text/css';

    if (st.styleSheet) {
      st.styleSheet.cssText = btn_s.nodeValue;
    } else {
      st.appendChild(btn_s);
    }

    h.appendChild(st);

    var mdl = d.createElement('div');
    var ovr = d.createElement('div');
    ovr.style = 'padding:1em;background-colour: #d0dfd7; opacity: 0.8;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-size:cover;filter:blur(30px);transition: filter 1.2s, background-image 1s;will-change: filter, background-image;transform: translate3d(0,0,0);'
    ovr.classList.add('age-gate-background-overlay');

    
    
    var t = d.createElement('p');
    t.classList.add('age-gate-title');
    t.style = 'line-height: normal;font-weight:bold;color: #000000;font-size:22px;font-family:-apple-system,BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif;margin:10px 0;text-align:center;';
    var age = d.createElement('p');
    age.classList.add('age-gate-description');
    age.style = 'line-height: normal;font-size: 18px; color: #000000;margin:14px 0;font-family:-apple-system,BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif; text-align: center; max-width: 420px;line-height:normal;';
    t.innerHTML = 'Please confirm your age';

            age.innerHTML = 'You must be 21 or older to access this site.';
    
      mdl.style = 'position:absolute;background:rgba(241,241,241,1);padding:1.25em;color:#000000;border-radius:17px;display:flex; flex-direction: column; align-items: center;';
    mdl.classList.add('age-gate-confirmation-box');

    
    mdl.appendChild(t);
    mdl.appendChild(age);

    var ctrl = d.createElement('div');
    ctrl.style = 'display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;';

    var btns = d.createElement('div');
            btns.style = 'display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;';
    
    
    var yes = d.createElement('button');
    yes.innerHTML = 'CONFIRM';
    yes.classList.add('age-gate-btn');
    yes.classList.add('age-gate-yes-btn');

    if (location.pathname !== '/preview') {
        yes.onclick = function() {

            
            out.outerHTML = null;

                            w.localStorage.setItem('age_confirmed', true);
            
            w.sessionStorage.setItem('age_confirmed', true);
        }
    }

    btns.appendChild(yes);

                        var no = d.createElement('button');
            no.classList.add('age-gate-btn');
            no.classList.add('age-gate-no-btn');
                no.innerHTML = 'NO';
        if (location.pathname !== '/preview') {
            no.onclick = function() {
                w.location = 'https://google.com';
            }
        }
        btns.appendChild(no);
    
    ctrl.appendChild(btns);
    mdl.appendChild(ctrl);

    var out = d.createElement('div');
    out.style = 'position: fixed; top: 0; left: 0; height: 100%; width: 100%; background: #d0dfd7; z-index: 2147483647; display: flex; flex-direction: column; align-items: center; justify-content: center';
    out.appendChild(ovr);
    out.appendChild(mdl);
    d.body.appendChild(out);

    
        }

    /* ==========================================================================
       0. LOGO INSTITUCIONAL OFICIAL - UNIVERSIDAD SIMÓN BOLÍVAR (BASE64)
       ========================================================================== */
    const USB_LOGO_BASE64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCABdAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7LooooAKKKKACiiigAr5l+Itr4u8JRrfwX8VvbERIbX7PGSmVxkNg7ssjE9+RXvreLNGXxLbeHxOXvrjdtRCGxtGSWAOVHHUjFeWftBf8i8n+9F/6E9YVrOLa6Hl5haeHnKL1jfZ21t5HlvhHVvGPivWTYQ6xHAFAJb7JGxJLBVAG31YdwAMmvqnwzp9xpmhJaXUaxyCR2IXAByxOcDgZ6496+Xvgl/yOjfWH/wBHJX11UYdXjdnPkycqHtJNtvu2ypqkMtzo17bwrullgdEGcZJUgc18yfEG68beEr1pxrLRwTTuq2xt41MAOGVQRkMNpxnPUGvorS/Fvh3W9WvdL0rVIbu5sSomEZyoJzgBujdD0zXh37Qv+stv+u4/9Fiqraw5kzTM2pYaVWEtV1T/AMjnPAmpeNfF+qNCmvMBC6Dylt42MmQzY5AAGEbkn09a+ntCtprPQLO2uIvKljjw0eQdvtxx+VfOH7Pg/wCKnuj/ANNIx/5Cnr6hpYde7diyhOWHVSTbbvu2+oUUUV0nshRRRQAUUUUAFFFFABRRRQBz3jTxMvhDwfe68bV7poAAkS92YgDJ7DJ5rgrbXNE8S2SXV7J4i8Xsy75ILC0lt7OPgZXaSisB/ts5P6V6veXFpaWM1zfzRQ2sSlpZJSAiqOpJPGK8/wDEHiPXtUSx0jw3AmmR6tJ5EM9ypE8kWMySxxfwKq87n5JwNvINZT33OHEXUuZy07W6/fb70dHpMnhfTNAsNQ0HTra2tdSWNreO2hSJ5t+CODjJwcnvgGuP+JXh0/EG0/svQNb0prqMrvjkufmXaW3ZCgnuKx08L6zJ4ruLSOx1e8gtLiLT4Ly5ZUFnY7EDtAflXe/zKWUblUccmkg+G2o6UJbxPD8MplMYngsZkV5I2mkaWJSxUBdggXnHyl+ck1m25Lltoc85TqQdNw93VPdfdp/XqUPh58K9b8JeIm1DUdT0x4QYs+VK/OJFbgsgB4HY9cV7Vr97puneHb++1cj7DBEzzA/xKP4ffPTHfOK8usfhi4j0+2vtFg8vzmglZXEnkQMWlkKljnBOyFSBuC7m4LcbmoNc694xlk1eGTS/CHhlvNZrlfLW9uF6Nz1jTqOxOOvZw9yNkh0F9XpezhG3brvq77aL+tdDye58GPbW7eJISLLXrKU6peMELRwzOwa3skQYBckgkfw7hnOQK7P4meA/Efijw/YXlzf6ZaTwRxyXklxI0aeZ5YVtoCnq2cD6VXv9cfW55n0bS59J0PQbyOQyzxFnkuZ5APtDIQSfLV3kwcnJXI7VWtNSk+x6tN4tutW1tNNvQNI0u+tnV5S2DHNMETLD5hgHpg4BJArJKOq7nCqdFRlTtpL5LS+r+7tq15l/4P8Aw71nw1dHV7q7sri0uGV0MDPuwElU5DIuOWH617dXmuneI9YtPC95qNpp7Xr+fHGz/Y5I/LGViaQxDLHGN3lp91AMncTUZ8X69a7oZ7xUM4nmV7uwYSWsKfKrGNSu5mkKhU6neo6g1vBxgrI9PD+yw9NU4bf5np1Fed2Hh7xv4h02K58Va/8A2ZK8a7bbTw8TQH+8WV8FzxwQyjHA616IBgAZJx3NaJ36HZTm5q7VvUKKKKo0CiiigAooooAKKKKAPMPizp3jO+k8Py+FtOTUre1uTPcWkhGyRxtMe8EjKj5u9bXgzwxrFld3XiTxdeR3viG9Xy/3Y/d2kWciJPbPJPfA69T2tFRyLm5jlWGj7V1W279Oi6BXlfxn1PXdH8Oi90XU7mykRd+YGIzh1U5/CQH8K9Lv7610zTbnUb6UQ21tG0srn+FQMk15XqepeIfiLof2mw8JmPw8S5E1xPtubmIqysY4wOpBJGTyQOamo9OXqTi5JwdJP3mtLXv66Hk/gj4keMbjxCbe8129vpHiLW0Ek3yyyoQ4Q5/vhSn/AAOuu8W+Idc8SeGNNn/4T/QLOWaWK5fTgnlCHHzLuZizMVOMjAGR3rxDV9LvfDmtm3Z2VoyJYLiPIEidVkU+/wCh46g12en/ABC0m9u7W48a6G+ryWqkJiZvKY/3mhyF3dckYB7g9a4YzduWTPkqGLlySoV5NPzb/TX9Ddk1DVNOhmh8EeM9Xv8Ay5Bc6nqXlFLKOR/vOTtLHJ7kdPWoPGHjbxzoVpp9hJ4ykur92kmkntHxG8XyrHtIAyPlc5xznPpTfEnxO8KalDnT/BFos5UJudPKXA+6GCH5gOOOK84d9W8U+IBhDdX10wVUQBQABwAOiqAPYAD0FEpW0iwxGJUE4UZtt9m7LXp57d+p7b8LfEHj3X7O6m/4SeJpZJ1hjfU3LqiqpLlVyNzZePA+pr0HWPC/xBu7JY38QaXqxWWOYbrVrKRGRtylHQsMhufmUj1FeZR/DjxhLBZ6Np3h2yuNLNkYY9QvZBiN5DuknVAQwbgBcg/Kq8cmvVLWb4meHLOK2utK07xNawKkayWk5guCoAGWEmVY9+DzXRC9rSue3hVNU+SspaddXr106+uq/I6Dwja+KbTRmj8WX0F5eeYTGYgCVj7BmCqGb3CiuhrltG8daLq1+ul3CXOj6seBY6jEYZH6/czw/Q/dJ45rqa6Y2toezRcXBKDvb+tQoooqjUKKKKACis2x13SdSF2bC8W4+xsY5wisTGw6qRj7w9OtWrG+tdSsYr2xmE9tMN0cig4Yeoz2pXEpJ7MsUVRs9Y0u/vruxs72OW6syBPCDh4s9Mg8jNS2V/aahE8tnN5qRu0bHaRhgcEcjqDxRcFJPZlmis/+29L/ALc/sT7Yn9peX5v2fB3bP73T7ueM9M8Uuq6xpmh2X23VrxLO2B2mWTIUHtk9qLoXNGzd9ia/sbXU9NudOvohNa3MbRSoTjcpGCK88j+F2p6bbGz8O/EHWtNsgTst3xKsY9F5GBXfzarYQTWcM1x5cl6223VlIMhxuwOOuAT9AfSl1LVLDR7F77U7lLW1QgNK+dq56ZPatlGL1ZlUpU5+9Lp1vb8UeaH4NQz6ZPa6vr0utmSRpgbuIKY3Y5ZkcHcuTyeSCeSDXCX/AOzxdif/AEDUJVj9GCSfruT+VfQllq+n6jK8VnP5jxqHZSjKQpzg8gcHB/KmX+uaVpd1b2t/diGe5z5Me1i0mOu0AckegrN0qbWpyVcvwtRe/H53/U+fLL9nm/NwPtmoSNF6KqR/rub+VeqeEvhZoPhlAwhSWQ43fxb+n3mPLDgcAKvqDXaabqunavaG60y8juoQ5jLRnO1h1U+hHoabfavp2nTRQXdztnlVmSFFaR2UYywVQTgZGTjHIpxpQjqiqGBwtD36cV67l6iobW6t76ziu7SVZoJVDI69GHrVW11vS73U7rTLW8SW8tMefCAd0Wem7jjPb17Vrc7+Zaa7jtU0fTNaszaarZRXcOcgSLyp9VPVT7jBpNLsbjTbb7G99LeQJxE853Sqv91m/jx6nn1yeaTUtb0vR2t11K8W2Ny4jhDA/vHPRRgck+nWkstd0nUL2Sxtb5Gu413tbsCkgX+9tYA498UtLke5zX6mjRRVazv7LUEleyuY7hYZWgkKHO11OGU+4NUXfoWaKrX+oWel2Ml7fzrb20Yy8jA4Uepx0FUYvE2hS3FtbjUY0kuuIBKrRibjICFgA34UroTkk7NnHeFdZ0nQNf8AGVjrWpW9hcyavJdxxXEgRpImRNrKDywJBHGa7Xw9HJF4Y0yOaNopFtowyMMFTtHB96vukLSIzohcfdJAyPpUlKMbGdOm4K1+/wCLueaanpFzPq+p+LPCbQyeINNvGSSJWGL2Hy0zC5Hfj5SehH5dN4H1SPWvCy6rDDLAl1c3D+VMMPGfOfKsPUHIrpFVVztUDPXApQAOgA78UlGzuKNLlm5J77rz7/5nAC4h/wCGgmj85N//AAj4TGe/2gnH1xzj05rrde0e31/w7f6Ndf6q8haInGdpI4b6g4P4Vo7E3bto3dc4rPuL2/GsW9jZ6eJISN9xcyybFjHZVGCXY+nAA6noKErXv1GoJJqWqb/M5TwBd6jrdjBd6xDJHdaMj6Y/mf8ALSdWxLIPXhUAPqXFWfimQPhVr4JwWgCj3Jda7MADoMUhAYYYAj3o5fd5ReybpOm3urXMDQL6Ked4P7cttTkMSOogC5iUDBB2k9T/AF9KwPG0u3xz4JjiuYobj7RclWk5CkwMFJGRkbiB1Ga71URM7EVfoMUFEY5ZVJ9SKbjdWHOnzR5b9V+DucV8OJrT+yNQs3txa65Heyvq0RPLXLHLSD/YYYK44xx2pniazU+Lk1PTPFsWgaxBYhHW6jSSKeAux5DEYwwOSDkcV3O0bi2Bk96ZJHBIyiaONyDlQ4Bx9KXLpYSo/u1Tb2+X5GJ4N1DUdU8Gabf6rZJZXcyFniRCi43EKwU8jcMNg8jNc/4UuIH+LPj5ElRmLWRAB64hwceuDwfSu/pAiA5CgH1Ao5dvIfs37l38P46NHB/EeWKG98FySyrGia/AzMxwAAj5J9uR+dGoouvfFHw3eaM6zQ6RHcPe3URym2RNqRbhwzE5O3PAGe4rq57m+fWorKDTBJaKu6e7mfaq56KgwS7cc9AOOSeK0QFVQFAA7AUuW7IdLmb10bT+63+Rl+IdT/srRJpo5IkupSILYSOFDTOdqAn0yQT6AE1w3honwj8SLvw/cxxWlnrkK3dsgnD4uEAWQE4By4Ab3Ir01lVhhlDfUUhRC2SoJ9cU3G7uXOnzSUr7f0/vOa+IRA+GviHJAzZSAZ9SMAVzPipofEXw90rw9otylzqty1oYvIIc2+1lZpGI+4AoYZOOuOpr0wgMMEAj0NCoiZ2KFz1wMUSje5NSjzuV3o1b8/8AM8JTV9E06z1Sx+JnhzUYdTluJN+svamVMMx8sxSDlAoIwF449c10HxQNnPY+Cbu0dZo7rVrWHzlP+ugYE4J7qeDisp/GOp69BP8ADm9jhae4Y6fLqZBbcpHLeWT97HfdwefatL4gafFaWvhbQbLEVtoskF3EWG4uIsqqHkdR3rDeLsea4ydKcY6rTXZ3vs+/r+ZY+KWgXV+umvoMjWep2NvPdQGAYMnk+WRHjvwTj3rQl8Ujxb8OLFtLmNvd61byJI0Z+a2VFPnsO/H3QfV1NWL3W5pPHHhxhCgje2O5TknM23of9nZ6c57YrKsfD1l4PtPGeoWBaUzXJihicnZbrIqMQo7Dc+TjGdq+lW1q2tjqlF+1co7PR/JaP8193Y5jStfvPDP7Mia7p7Y1Odnj+0N8zZM7LuJPUhemenFejQeAfDknhyKzntBNdtEC2ouS1yZCP9Z5v3t2eeuO3TiuZ8HeGrTXPhLc+B9RcvBCSouEG1ss5kVsc8gkd+cVmWPxE1u0P/CFukM2oQOLFNVIIzxgSGLPLAY/iwTz7VMbJLm7HPRXs1H2y05Uvmr3+/TXyLGg6je+KPgdqceuzNcXdjLJZ/av4yVIAkB/vANjPtzV7whq174f1uT4aeMmFwCp/su9mGVvYP8Anm2f4h0x+HYZv6rott4M+Fy6BpZMgkby2mm5LOxLM5GeckdM/wAq0PFPh+y8deBYpbrdZ3aRC7tbmLl7aTGQQeMj1HH4EAilFq3dGqpVIxjJP34pfPuv+D3+Zp+CbaG28E6WsMYTdCHb1Zj1JPc+9cD4hhs1+PMME+jy6nbS6MZpLOFFYPJ5jDeVYgE44z9K7/wSrp4C0SOSQyutoilz1YgYyfrXB+Kr6bRfi1/wksSpK1vYCyEDAgHcS+7Of9rGMdqcvhRpWV6UNOqKfh3WpvDfwj8V6xZ6j59xb3MrQ2UhZjppYhEiYNzlepHTIPXk11/h7wdoWo+C7CbWbNNTv762Se4vZ8tMzuoYlX+8uCeMEYwMVF4c8E2c3hbWxqtybyfxO73F46J5YXdnCouTjbngknmuStfHWp+DHPgXyIdRfT9ltbXz5TCHhNyDO7aMdGGcdutQvdtzbGMF7Ll9qtLW763/AFX3bEug6jfaj8LvHWjatcPftoMl3a29zLzIVRG2Et/eBB5+ldv8M4o0+GehyqgEk1uskjd3Y9ST3NZreGIfDXwq1qwiuWubvUYpZLq7dMGWWYbWfaDwBngZ7de9c14a8Valp+naJ4QtlhURSQ2xutp3FN43fLnAJGR14zmnH3WubsOkpUpQ9p/Lb8dEakVvAP2kpoBEvlf2N9q2Y+XzfNUb8f3sd6ivLaDwj8c9MuzEBpfiCFreMEfLb3IxyvZd3A46ljRDPIfjnJrRC/NCdJ8rHQBwd+fXjpiuh+KOjJrHgWZxOba6sZo7u2nUZaJ1YDI5HYkUW0bXRi9nLknJLVSbX9ea0LmhWNtfeKtZ8TCBAPM+w2zAdRFkSSfUyFlz6RrXDvr17pvxS0fxTcXm/Q/ERfTUjyNsCq2IX995y2ewc12Piky+H/h3/Z2lSmGRohZpO3zMm5SDJ15bqevU5rl/G/h7Qbz4aWS2OjWemz3RhMU8EKh7cgbsggAngEde9OV7adNTWvGXL7m619Xfb56r5l740xIfAKXAGydLuFFlU7WUM2GAYcgGq+madp958YVuPCjjTbbRoWi1a3UNEJ3YMEXyzjOOu/GDgYJrO8YXt74j+G+k6fcyxpcTybpLjYSGaEgZ2543E568Vf15ZrXW9A+IelyrZ3lxF9nvbfaWS6i4IB5GCOx56L6YMvWV/QyqJyq86Wnu+ujf5XV+60P/2Q==";
    document.querySelectorAll(".usb-logo-target").forEach(function(el) {
      el.src = "assets/logo.png";
      el.onerror = function() {
        this.onerror = null;
        this.src = USB_LOGO_BASE64;
      };
    });

    /* ==========================================================================
       1. GAMIFICACIÓN: XP & AUDIO WEB
       ========================================================================== */
    let currentXP = 0;
    let audioCtx = null;
    let soundActive = false;

    function updateHUD() {
      const label = document.getElementById('hud-xp-label');
      const pbar = document.getElementById('hud-xp-bar');
      const pcent = document.getElementById('hud-xp-percent');

      let rank = "Iniciado";
      if (currentXP >= 1000) rank = "Maestro Neguentrópico";
      else if (currentXP >= 750) rank = "Especialista Cibernético";
      else if (currentXP >= 500) rank = "Analista Sistémico";
      else if (currentXP >= 250) rank = "Explorador";
      else if (currentXP > 0) rank = "Aprendiz";

      if (label) label.textContent = `${currentXP} XP · Rango: ${rank}`;
      const pct = Math.min(100, Math.round((currentXP / 1000) * 100));
      if (pbar) pbar.style.width = `${pct}%`;
      if (pcent) pcent.textContent = `${pct}%`;

      const badges = document.querySelectorAll('.badge-icon');
      const thresholds = [50, 150, 250, 400, 550, 700, 800, 900, 1000];
      badges.forEach((b, idx) => {
        if (currentXP >= thresholds[idx]) {
          b.classList.add('unlocked');
        } else {
          b.classList.remove('unlocked');
        }
      });
    }

    function addXP(points, withConfetti = true) {
      currentXP = Math.min(1000, currentXP + points);
      updateHUD();
      if (withConfetti) {
        triggerConfetti();
      }
    }

    function inspectBadge(name, reqXP = 0) {
      playTone('click');
      const isUnlocked = currentXP >= reqXP;
      const status = isUnlocked ? "✅ DESBLOQUEADA" : `🔒 BLOQUEADA (Requiere ${reqXP} XP)`;
      alert(`Insignia Sistémica [${status}]:\n${name}\nXP acumulado: ${currentXP} / 1000`);
    }

    const soundBtn = document.getElementById('sound-btn');
    soundBtn.addEventListener('click', () => {
      soundActive = !soundActive;
      soundBtn.classList.toggle('active', soundActive);
      if (soundActive && !audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (soundActive) playTone('chime');
    });

    function playTone(type) {
      if (!soundActive) return;
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.06);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.06);
        osc.start(t);
        osc.stop(t + 0.06);
      } else if (type === 'success' || type === 'chime') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, t);
        osc.frequency.setValueAtTime(587.33, t + 0.08);
        osc.frequency.setValueAtTime(880, t + 0.16);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.35);
        osc.start(t);
        osc.stop(t + 0.35);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.linearRampToValueAtTime(110, t + 0.18);
        gain.gain.setValueAtTime(0.14, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
        osc.start(t);
        osc.stop(t + 0.2);
      }
    }

    /* ==========================================================================
       2. MOTOR DE CONFETTI EN CANVAS (100% VANILLA)
       ========================================================================== */
    const canvas = document.getElementById('fx-canvas');
    const ctx = canvas.getContext('2d');
    let confetti = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function triggerConfetti() {
      const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#ec4899', '#fbbf24'];
      for (let i = 0; i < 75; i++) {
        confetti.push({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.7) * 16,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 8,
          alpha: 1
        });
      }
    }

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.35;
        c.rot += c.vrot;
        c.alpha -= 0.015;

        if (c.alpha <= 0) {
          confetti.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rot * Math.PI) / 180);
        ctx.globalAlpha = c.alpha;
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        ctx.restore();
      }
      requestAnimationFrame(renderConfetti);
    }
    renderConfetti();

    /* ==========================================================================
       3. HERO SLIDER & DIAL DEL TEMA 19
       ========================================================================== */
    const heroSlider = document.getElementById('hero-slider');
    const heroDialBar = document.getElementById('hero-dial-bar');
    const heroDialNum = document.getElementById('hero-dial-num');
    const heroDialStatus = document.getElementById('hero-dial-status');
    const heroFeedbackText = document.getElementById('hero-feedback-text');

    heroSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      heroDialNum.textContent = `${val}%`;
      const offset = 565 - (565 * val) / 100;
      heroDialBar.style.strokeDashoffset = offset;

      if (val >= 60) {
        heroDialStatus.textContent = "Neguentropía";
        heroDialStatus.style.color = "var(--neon-green)";
        heroFeedbackText.innerHTML = "⚡ <strong>Equilibrio Dinámico (Homeostasis):</strong> El sistema absorbe orden y expulsa entropía al medio.";
        heroFeedbackText.style.color = "#6ee7b7";
      } else if (val >= 35) {
        heroDialStatus.textContent = "Tensión Entrópica";
        heroDialStatus.style.color = "var(--neon-amber)";
        heroFeedbackText.innerHTML = "⚠️ <strong>Alerta:</strong> Desgaste acumulado sin compensar. Requiere inyección urgente de información.";
        heroFeedbackText.style.color = "#fde68a";
      } else {
        heroDialStatus.textContent = "Entropía Máxima";
        heroDialStatus.style.color = "var(--neon-rose)";
        heroFeedbackText.innerHTML = "💥 <strong>Colapso Sistémico:</strong> Muerte térmica por disipación y desorganización absoluta.";
        heroFeedbackText.style.color = "#fda4af";
      }
    });

    const epsrDetails = {
      entrada: {
        tag: '🌱 CARTA DE ENTRADA // INYECCIÓN DE NEGANTROPÍA',
        tagClass: 'unit-tag-cyan',
        borderColor: 'var(--neon-cyan)',
        glow: 'rgba(6, 182, 212, 0.35)',
        title: 'Entrada (Input): Inyección de Neguentropía e Información',
        desc: 'En la Teoría General de Sistemas de Ludwig von Bertalanffy, todo sistema abierto sobrevive únicamente porque importa continuamente neguentropía de su ambiente exterior. Cada bit de información precisa y cada unidad de energía libre neutraliza la degradación interna y retarda la muerte sistémica.',
        law: 'Schrödinger (1944): "El ser vivo se alimenta continuamente de entropía negativa." Flujo termodinámico dₑS &lt; 0.',
        sw: 'Requerimientos refinados, parches de seguridad, refactorización periódica y datos validados.',
        org: 'Inversión de capital, talento humano calificado, estudios de mercado y retroalimentación de clientes.'
      },
      proceso: {
        tag: '⚙️ CARTA DE PROCESO // TRANSFORMACIÓN Y METABOLISMO',
        tagClass: 'unit-tag-purple',
        borderColor: 'var(--neon-purple)',
        glow: 'rgba(139, 92, 246, 0.35)',
        title: 'Proceso Interno (Throughput): Organización y Diferenciación',
        desc: 'Es la maquinaria operativa del sistema. Transforma insumos y genera inevitablemente desgaste y fricción interna (dᵢS > 0). Sin embargo, gracias a la sinergia, la coordinación y la estructura metabólica, logra retener y multiplicar el orden para retardar la entropía.',
        law: 'Bertalanffy (1968): "El estado uniforme dinámico (steady state) se conserva consumiendo trabajo interno."',
        sw: 'Ejecución optimizada de algoritmos, pruebas automatizadas, recolección de basura (GC) y microservicios.',
        org: 'Procesos de producción, metodologías ágiles de trabajo, resolución interna de cuellos de botella y cultura.'
      },
      salida: {
        tag: '🔥 CARTA DE SALIDA // EXPORTACIÓN DE ENTROPÍA',
        tagClass: 'unit-tag-rose',
        borderColor: 'var(--neon-rose)',
        glow: 'rgba(244, 63, 94, 0.35)',
        title: 'Salida (Output): Disipación del Desorden y Entrega de Valor',
        desc: 'Para mantener baja su propia entropía interna, el sistema abierto debe expulsar su desorden al entorno exterior: evacúa calor residual, desechos metabólicos y subproductos degradados, al tiempo que libera al medio sus productos o servicios útiles.',
        law: 'Clausius & Prigogine: "Para que la entropía interna no crezca, el sistema debe disipar calor y residuos al medio exterior."',
        sw: 'Liberación de memoria RAM huérfana, depuración de logs obsoletos, eliminación de dead code y releases a producción.',
        org: 'Bienes y servicios colocados en el mercado, rotación de activos y liquidación de pasivos u obsolescencia.'
      },
      feedback: {
        tag: '⚖️ CARTA DE RETROALIMENTACIÓN // HOMEOSTASIS CIBERNÉTICA',
        tagClass: 'unit-tag-gold',
        borderColor: 'var(--neon-gold)',
        glow: 'rgba(251, 191, 36, 0.35)',
        title: 'Retroalimentación Negativa (Feedback): Bucle de Regulación',
        desc: 'Norbert Wiener y Ross Ashby demostraron que la retroalimentación negativa compara la salida con el estándar óptimo. Al detectar una perturbación entrópica, envía una señal correctiva a la entrada para reprimir las desviaciones y estabilizar el sistema.',
        law: 'Wiener (1948) & Ashby (1956): "Solo la variedad del mecanismo de control neutraliza la variedad caótica del entorno."',
        sw: 'Monitoreo APM (Datadog/Prometheus), auto-escalado horizontal de réplicas en la nube y circuit breakers.',
        org: 'Auditorías de calidad periódicas, balances financieros mensuales, KPIs y encuestas de satisfacción.'
      }
    };

    function showTopicDetail(box) {
      playTone('click');
      const data = epsrDetails[box];
      if (!data) return;

      const card = document.getElementById('epsr-live-card');
      const tag = document.getElementById('epsr-tag');
      const title = document.getElementById('epsr-card-title');
      const desc = document.getElementById('epsr-card-desc');
      const law = document.getElementById('epsr-detail-law');
      const sw = document.getElementById('epsr-detail-sw');
      const org = document.getElementById('epsr-detail-org');

      if (tag) {
        tag.textContent = data.tag;
        tag.className = `unit-tag ${data.tagClass}`;
      }
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (law) law.innerHTML = data.law;
      if (sw) sw.textContent = data.sw;
      if (org) org.textContent = data.org;

      if (card) {
        card.style.borderColor = data.borderColor;
        card.style.boxShadow = `0 10px 30px ${data.glow}`;
      }

      document.querySelectorAll('.epsr-tab-btn').forEach(btn => {
        const text = btn.textContent.toLowerCase();
        btn.classList.toggle('active', text === box || (box === 'feedback' && text === 'feedback'));
      });
    }

    /* ==========================================================================
       4. TALLER DE CLASIFICACIÓN DE ENTRÓPICO VS NEGUENTRÓPICO
       ========================================================================== */
    const awardedMatchingItems = new Set();
    function validateTopicMatching() {
      const items = document.querySelectorAll('.matching-item');
      let corrects = 0;
      let total = items.length;
      let newlyEarnedXP = 0;

      items.forEach((item, index) => {
        const expected = item.getAttribute('data-answer');
        const select = item.querySelector('.matching-select');
        const userChoice = select.value;

        item.classList.remove('correct', 'incorrect');
        if (userChoice === expected) {
          item.classList.add('correct');
          corrects++;
          if (!awardedMatchingItems.has(index)) {
            awardedMatchingItems.add(index);
            newlyEarnedXP += 15;
          }
        } else {
          item.classList.add('incorrect');
        }
      });

      const fb = document.getElementById('matching-feedback');
      if (newlyEarnedXP > 0) {
        addXP(newlyEarnedXP);
      }

      if (corrects === total) {
        playTone('success');
        fb.innerHTML = `🎉 ¡Brillante! 10/10 fenómenos clasificados correctamente (+150 XP acumulados).`;
        fb.style.color = "var(--neon-green)";
      } else {
        if (newlyEarnedXP > 0) {
          playTone('success');
          fb.innerHTML = `¡Acertaste ${corrects} de ${total}! Sumaste +${newlyEarnedXP} XP al medidor. Corrige los ítems en rojo para seguir acumulando.`;
          fb.style.color = "var(--neon-cyan)";
        } else {
          playTone('error');
          fb.innerHTML = `Has acertado ${corrects} de ${total}. Corrige los ítems en rojo para acumular más XP.`;
          fb.style.color = "var(--neon-rose)";
        }
      }
    }

    /* ==========================================================================
       5. CASOS REALES COMPARATIVOS: ANTES VS DESPUÉS (TOGGLE)
       ========================================================================== */
    const casesData = {
      org: {
        entropy: {
          title: "Caos y Desorganización",
          color: "#f43f5e",
          desc: "Silos rígidos, nula comunicación transversal, desmotivación laboral y ceguera ante las demandas del mercado.",
          tag: "ΔS > 0: Quiebra e Inercia"
        },
        negentropy: {
          title: "Reestructuración y Cultura Ágil",
          color: "#10b981",
          desc: "Retrospectivas continuas, absorción activa de tendencias del mercado, equipos autónomos y flujos de información fluidos.",
          tag: "Neguentropía: Organización Resiliente"
        }
      },
      bio: {
        entropy: {
          title: "Envejecimiento y Degeneración",
          color: "#f43f5e",
          desc: "Estrés oxidativo, sedentarismo, acumulación de toxinas celulares y pérdida progresiva de la capacidad termorreguladora.",
          tag: "ΔS > 0: Falla Metabólica"
        },
        negentropy: {
          title: "Regeneración y Nutrición Celular",
          color: "#10b981",
          desc: "Ingesta de antioxidantes, descanso restaurador, ejercicio aeróbico y autofagia para eliminar componentes dañados.",
          tag: "Neguentropía: Homeostasis Vital"
        }
      },
      soft: {
        entropy: {
          title: "Deuda Técnica y Spaghetti",
          color: "#f43f5e",
          desc: "Código no documentado, parches de emergencia sin pruebas, librerías obsoletas y fallos impredecibles en producción.",
          tag: "ΔS > 0: Software Inmantenible"
        },
        negentropy: {
          title: "Refactorización y Arquitectura Limpia",
          color: "#10b981",
          desc: "Adopción de SOLID, pruebas unitarias TDD automatizadas, tuberías CI/CD con observabilidad y modularización desacoplada.",
          tag: "Neguentropía: Software Sostenible"
        }
      }
    };

    function setCaseState(caseKey, state, btn) {
      playTone('click');
      const parent = btn.parentElement;
      parent.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active', 'entropic', 'negentropic'));
      btn.classList.add('active', state === 'entropy' ? 'entropic' : 'negentropic');

      const data = casesData[caseKey][state];
      const targetDiv = document.getElementById(`content-${caseKey}`);
      targetDiv.innerHTML = `
        <h4 style="color: ${data.color}; font-size: 0.95rem; margin-bottom: 0.4rem;">${data.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.8rem;">
          ${data.desc}
        </p>
        <span class="unit-tag ${state === 'entropy' ? 'unit-tag-rose' : 'unit-tag-green'}" style="font-size: 0.7rem;">${data.tag}</span>
      `;
    }

    /* ==========================================================================
       6. MODAL DE DECISIÓN SISTÉMICA
       ========================================================================== */
    const decisionData = {
      '1_A': {
        tag: 'ACELERADOR DE ENTROPÍA',
        title: 'Error: Sobrecarga del Sistema Humano',
        text: 'Forzar horas extra sin corregir la causa de fondo incrementa el cansancio, la tasa de bugs y la desmotivación. El sistema disipa su energía sin orden.',
        cite: 'Bertalanffy: "Aumentar energía bruta a ciegas sobre un sistema sin feedback acelera la degradación."'
      },
      '1_B': {
        tag: 'NEGUENTROPÍA POSITIVA',
        title: '¡Acierto! Inyección de Información & Feedback',
        text: 'CI/CD automatiza procesos y reduce errores; las retrospectivas proveen retroalimentación negativa que estabiliza el ritmo y la calidad.',
        cite: 'Wiener & Bertalanffy: "La información estructurada y el control cibernético son los mayores inductores de neguentropía."'
      },
      '1_C': {
        tag: 'CAOS INMINENTE',
        title: 'Desastre: Pérdida de Cohesión',
        text: 'Eliminar toda coordinación disuelve los vínculos entre subsistemas. Cada persona trabajará en islas no integrables, elevando el desorden al máximo.',
        cite: 'TGS: "Un sistema se define por las relaciones entre sus elementos, no por partes aisladas."'
      },
      '2_A': {
        tag: 'CONDENA A LA MUERTE TÉRMICA',
        title: 'Fallo Crítico: Aislamiento Cerrado',
        text: 'Aislar el humedal lo transforma en un sistema termodinámicamente cerrado. La segunda ley condena a todo sistema cerrado a la máxima entropía.',
        cite: 'Segunda Ley: "En sistemas aislados, la entropía siempre crece hasta el equilibrio de muerte."'
      },
      '2_B': {
        tag: 'ANIQUILACIÓN SISTÉMICA',
        title: 'Destrucción Total',
        text: 'El veneno extermina las especies y anula los mecanismos de autorregulación del ecosistema, imposibilitando la homeostasis futura.',
        cite: 'Johansen Bertoglio: "Destruir los órganos reguladores elimina la identidad del sistema."'
      },
      '2_C': {
        tag: 'RESTAURACIÓN HOMEOSTÁTICA',
        title: '¡Acierto! Sistema Abierto Revitalizado',
        text: 'Reconectar los afluentes permite importar oxígeno disuelto y exportar contaminantes orgánicos. La biorremediación recupera la equifinalidad.',
        cite: 'Schrödinger: "Los seres vivos evitan el decaimiento extrayendo continuamente entropía negativa de su entorno."'
      },
      '3_A': {
        tag: 'PROTECCIÓN CIBERNÉTICA',
        title: '¡Diseño Resiliente!',
        text: 'El Circuit Breaker aísla la falla local e impide que la sobrecarga sature el resto de servicios, conservando la viabilidad global.',
        cite: 'Ashby: "La variedad y compartimentación del sistema de control protegen la estabilidad macroscópica."'
      },
      '3_B': {
        tag: 'SOLUCIÓN ILUSORIA',
        title: 'Gasto Inútil de Recursos',
        text: 'Aumentar memoria RAM no corrige el cuello de botella del algoritmo. Tarde o temprano los recursos volverán a saturarse.',
        cite: 'Bertalanffy: "Las fallas estructurales de diseño no se resuelven agregando recursos lineales."'
      },
      '3_C': {
        tag: 'CEGUERA CRÍTICA',
        title: 'Pérdida de Sensores',
        text: 'Apagar los logs impide detectar anomalías. Sin retroalimentación de monitoreo, el colapso total es inevitable.',
        cite: 'Cibernética: "Sin sensores que midan la desviación es imposible ejercer homeostasis."'
      }
    };

    const awardedDecisions = new Set();
    function openDecision(caseId, opt) {
      playTone('click');
      const data = decisionData[`${caseId}_${opt}`];
      if (!data) return;

      const isCorrect = data.tag.includes('NEGUENTROPÍA') || data.tag.includes('RESTAURACIÓN') || data.tag.includes('PROTECCIÓN');

      if (isCorrect) {
        playTone('success');
        if (!awardedDecisions.has(caseId)) {
          awardedDecisions.add(caseId);
          addXP(50);
        }
      } else {
        playTone('error');
      }

      document.getElementById('modal-tag').textContent = data.tag;
      document.getElementById('modal-head').textContent = data.title;
      document.getElementById('modal-text').textContent = data.text;
      document.getElementById('modal-cite').textContent = data.cite;
      document.getElementById('decision-modal').classList.add('open');
    }

    function closeDecision() {
      playTone('click');
      document.getElementById('decision-modal').classList.remove('open');
    }

    /* ==========================================================================
       7. JUEGO 1: CLASIFICADOR RÁPIDO
       ========================================================================== */
    const g1Events = [
      { text: "Pruebas unitarias automáticas y refactorización orientada a SOLID", cat: "Software", type: "negentropy" },
      { text: "Acumulación descontrolada de deuda técnica y falta de pruebas", cat: "Software", type: "entropy" },
      { text: "Dieta rica en antioxidantes, hidratación y sueño reparador", cat: "Biología", type: "negentropy" },
      { text: "Aislar completamente una fábrica respecto a clientes y entorno", cat: "Organización", type: "entropy" },
      { text: "Retrospectivas ágiles periódicas y canales abiertos de feedback", cat: "Gestión", type: "negentropy" },
      { text: "Fugas continuas de memoria RAM en el servidor sin recolección", cat: "Sistemas", type: "entropy" },
      { text: "Fotosíntesis celular que fija energía solar en enlaces químicos", cat: "Biología", type: "negentropy" },
      { text: "Ruido excesivo y distorsión en los canales de comunicación", cat: "Cibernética", type: "entropy" }
    ];

    let g1Score = 0;
    let g1Time = 30;
    let g1Timer = null;
    let g1Index = 0;

    function startG1() {
      playTone('click');
      g1Score = 0;
      g1Time = 30;
      document.getElementById('g1-score').textContent = '0';
      document.getElementById('g1-time').textContent = '30';

      document.getElementById('g1-start-screen').style.display = 'none';
      document.getElementById('g1-end-screen').style.display = 'none';
      document.getElementById('g1-play-screen').style.display = 'block';

      g1Events.sort(() => Math.random() - 0.5);
      g1Index = 0;
      showG1Card();

      clearInterval(g1Timer);
      g1Timer = setInterval(() => {
        g1Time--;
        document.getElementById('g1-time').textContent = g1Time;
        if (g1Time <= 0) {
          clearInterval(g1Timer);
          document.getElementById('g1-play-screen').style.display = 'none';
          document.getElementById('g1-end-screen').style.display = 'block';
          document.getElementById('g1-final-score').textContent = g1Score;
          triggerConfetti();
          playTone('success');
        }
      }, 1000);
    }

    function showG1Card() {
      const item = g1Events[g1Index % g1Events.length];
      document.getElementById('g1-category').textContent = `// CONTEXTO: ${item.cat.toUpperCase()}`;
      document.getElementById('g1-text').textContent = item.text;
    }

    function answerG1(choice) {
      const item = g1Events[g1Index % g1Events.length];
      const card = document.getElementById('g1-card');

      if (choice === item.type) {
        playTone('click');
        g1Score += 10;
        document.getElementById('g1-score').textContent = g1Score;
        card.style.borderColor = "var(--neon-green)";
        setTimeout(() => { card.style.borderColor = "rgba(255,255,255,0.2)"; }, 200);
        addXP(10, false);
      } else {
        playTone('error');
        g1Score = Math.max(0, g1Score - 5);
        document.getElementById('g1-score').textContent = g1Score;
        card.style.borderColor = "var(--neon-rose)";
        setTimeout(() => { card.style.borderColor = "rgba(255,255,255,0.2)"; }, 200);
      }
      g1Index++;
      showG1Card();
    }

    /* ==========================================================================
       8. JUEGO 2: SIMULADOR DE NEGANTROPÍA
       ========================================================================== */
    let simCycle = 1;
    let simEnergy = 100;
    let simNegentropy = 70;
    let simEntropy = 30;
    let simActive = true;
    let simTimer = null;

    function updateSimUI() {
      document.getElementById('sim-cycle-val').textContent = simCycle;
      document.getElementById('sim-energy-val').textContent = simEnergy;
      document.getElementById('sim-neg-text').textContent = `${Math.round(simNegentropy)}%`;
      document.getElementById('sim-neg-bar').style.width = `${Math.max(0, Math.min(100, simNegentropy))}%`;
      document.getElementById('sim-ent-text').textContent = `${Math.round(simEntropy)}%`;
      document.getElementById('sim-ent-bar').style.width = `${Math.max(0, Math.min(100, simEntropy))}%`;

      document.getElementById('sbtn-info').disabled = simEnergy < 15;
      document.getElementById('sbtn-maint').disabled = simEnergy < 25;
      document.getElementById('sbtn-feed').disabled = simEnergy < 10;
      document.getElementById('sbtn-homeo').disabled = simEnergy < 20;
    }

    function logSim(msg, color = '#94a3b8') {
      const consoleEl = document.getElementById('sim-console');
      const line = document.createElement('div');
      line.style.color = color;
      const t = `[00:${simCycle < 10 ? '0' + simCycle : simCycle}]`;
      line.textContent = `${t} ${msg}`;
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function simStep() {
      if (!simActive) return;
      simCycle++;

      const decay = 4 + Math.random() * 3;
      simEntropy = Math.min(100, simEntropy + decay);
      simNegentropy = Math.max(0, 100 - simEntropy);
      simEnergy = Math.min(100, simEnergy + 8);

      if (simEntropy >= 90) {
        logSim("ALERTA CRÍTICA: Entropía al 90%. Colapso inminente por desorganización.", "#fda4af");
        playTone('error');
      } else if (simEntropy >= 100) {
        logSim("MUERTE DEL SISTEMA: El desorden térmico ha disuelto la estructura.", "#f43f5e");
        simActive = false;
        document.getElementById('sim-toggle-btn').textContent = "▶️ Reanudar";
      }

      updateSimUI();
    }

    let simActionsRewarded = 0;
    function execSimAction(type) {
      playTone('click');
      if (type === 'info') {
        simEnergy -= 15;
        simEntropy = Math.max(0, simEntropy - 14);
        simNegentropy = 100 - simEntropy;
        logSim("Inyección de información aplicada (-14% Entropía).", "#67e8f9");
      } else if (type === 'maint') {
        simEnergy -= 25;
        simEntropy = Math.max(0, simEntropy - 24);
        simNegentropy = 100 - simEntropy;
        logSim("Mantenimiento y refactorización aplicados (-24% Entropía).", "#6ee7b7");
      } else if (type === 'feed') {
        simEnergy -= 10;
        simEntropy = Math.max(0, simEntropy - 9);
        simNegentropy = 100 - simEntropy;
        logSim("Canales de Feedback abiertos: adaptación con el entorno.", "#c4b5fd");
      } else if (type === 'homeo') {
        simEnergy -= 20;
        simEntropy = Math.max(0, simEntropy - 18);
        simNegentropy = 100 - simEntropy;
        logSim("Homeostasis calibrada: sistema estabilizado contra perturbaciones.", "#34d399");
      }
      if (simActionsRewarded < 10) {
        simActionsRewarded++;
        addXP(5, false);
      }
      updateSimUI();
    }

    function toggleSim() {
      playTone('click');
      simActive = !simActive;
      document.getElementById('sim-toggle-btn').textContent = simActive ? "⏸️ Pausar" : "▶️ Reanudar";
    }

    function resetSim() {
      playTone('click');
      simCycle = 1;
      simEnergy = 100;
      simNegentropy = 70;
      simEntropy = 30;
      simActive = true;
      document.getElementById('sim-toggle-btn').textContent = "⏸️ Pausar";
      document.getElementById('sim-console').innerHTML = `
        <div>[00:01] Sistema restablecido al equilibrio dinámico óptimo.</div>
        <div style="color: var(--neon-cyan);">>> Administra los recursos para frenar la entropía.</div>
      `;
      updateSimUI();
    }

    simTimer = setInterval(simStep, 2800);
    updateSimUI();

    /* ==========================================================================
       9. QUIZ EVALUATIVO: TEMA 19
       ========================================================================== */
    const quizQuestions = [
      {
        q: "¿Por qué un sistema abierto puede evitar la muerte entrópica a diferencia de uno cerrado?",
        opts: [
          "Porque sus componentes no sufren desgaste mecánico ni fricción.",
          "Porque importa energía, materia e información del entorno para exportar su entropía.",
          "Porque la segunda ley de la termodinámica no rige en el mundo social.",
          "Porque sus límites son totalmente impermeables a cualquier influjo."
        ],
        c: 1,
        exp: "Exacto: Bertalanffy y Schrödinger demostraron que los sistemas abiertos subsisten importando neguentropía (orden, nutrientes, datos) del entorno y expulsando la degradación."
      },
      {
        q: "¿Cuál es el postulado central de Erwin Schrödinger en '¿Qué es la vida?' (1944) respecto a la Neguentropía?",
        opts: [
          "Que los organismos vivos violan las leyes físicas de la termodinámica.",
          "Que un ser vivo evita el decaimiento hacia el equilibrio inerte extrayendo continuamente entropía negativa de su medio.",
          "Que la entropía de un sistema cerrado puede disminuir de forma espontánea.",
          "Que los sistemas complejos no necesitan interactuar con su ambiente."
        ],
        c: 1,
        exp: "Correcto: Schrödinger definió que la vida se sostiene bebiendo 'entropía negativa' del medio circundante, trasladando su entropía al entorno."
      },
      {
        q: "Según Léon Brillouin y Claude Shannon, ¿cuál es la relación formal entre la Información y la Neguentropía?",
        opts: [
          "La información es una forma de calor térmico disipado al azar.",
          "La información es directamente equivalente a la neguentropía: cada bit reduce la incertidumbre y el caos del sistema.",
          "La información no tiene ninguna relación con los estados de orden sistémico.",
          "A mayor información, mayor es el desorden intrínseco del sistema."
        ],
        c: 1,
        exp: "Exacto: Brillouin demostró que Información = -Entropía (Neguentropía). La captación de datos precisos reordena el sistema y abate el caos."
      },
      {
        q: "En un proyecto de Ingeniería de Software, ¿cuál de las siguientes situaciones representa Entropía pura?",
        opts: [
          "Pruebas unitarias continuas y refactorización orientada a SOLID.",
          "Acumulación descontrolada de deuda técnica, código duplicado y falta de documentación.",
          "Despliegues automatizados mediante tuberías CI/CD con observabilidad.",
          "Comunicación fluida y transparente entre desarrolladores y usuarios."
        ],
        c: 1,
        exp: "Correcto: El deterioro progresivo del código sin mantenimiento (code rot o deuda técnica) es la manifestación clásica de la entropía en software."
      },
      {
        q: "El principio sistémico de 'Equifinalidad' propuesto por Ludwig von Bertalanffy postula que:",
        opts: [
          "El estado final del sistema está fijado rígidamente por sus condiciones iniciales.",
          "Todos los sistemas inevitablemente concluyen en el caos.",
          "Un sistema abierto puede alcanzar el mismo estado final partiendo de condiciones distintas y por vías diversas.",
          "No existe posibilidad de anticipar el comportamiento de los sistemas vivientes."
        ],
        c: 2,
        exp: "Correcto: La equifinalidad demuestra que, gracias al intercambio libre con el medio, los sistemas abiertos gozan de múltiples rutas para alcanzar y mantener su meta."
      }
    ];

    let quizIdx = 0;
    let quizPoints = 0;
    let quizBlocked = false;

    function renderQuizQuestion() {
      quizBlocked = false;
      const q = quizQuestions[quizIdx];
      document.getElementById('quiz-counter-tag').textContent = `PREGUNTA ${quizIdx + 1} DE ${quizQuestions.length}`;
      document.getElementById('quiz-pbar').style.width = `${((quizIdx + 1) / quizQuestions.length) * 100}%`;
      document.getElementById('quiz-question-title').textContent = q.q;

      const box = document.getElementById('quiz-options-box');
      box.innerHTML = '';

      q.opts.forEach((optText, i) => {
        const item = document.createElement('div');
        item.className = 'quiz-option';
        item.innerHTML = `
          <span style="font-weight: 800; color: var(--neon-cyan);">${String.fromCharCode(65 + i)})</span>
          <span>${optText}</span>
        `;
        item.onclick = () => answerQuiz(i, item);
        box.appendChild(item);
      });

      const exp = document.getElementById('quiz-expl-box');
      exp.style.display = 'none';
      const nextBtn = document.getElementById('quiz-next-btn');
      nextBtn.style.display = 'none';
      nextBtn.textContent = quizIdx === quizQuestions.length - 1 ? 'Ver Resultados →' : 'Siguiente Pregunta →';
    }

    function answerQuiz(selectedIdx, el) {
      if (quizBlocked) return;
      quizBlocked = true;

      const q = quizQuestions[quizIdx];
      const opts = document.querySelectorAll('#quiz-options-box .quiz-option');
      opts.forEach(o => o.classList.add('locked'));

      const exp = document.getElementById('quiz-expl-box');
      exp.style.display = 'block';

      if (selectedIdx === q.c) {
        playTone('success');
        quizPoints++;
        el.classList.add('correct');
        exp.style.borderColor = "var(--neon-green)";
        exp.style.color = "#6ee7b7";
        exp.innerHTML = `<strong>✨ ¡Correcto! (+100 XP)</strong><br>${q.exp}`;
        addXP(100);
      } else {
        playTone('error');
        el.classList.add('incorrect');
        if (opts[q.c]) opts[q.c].classList.add('correct');
        exp.style.borderColor = "var(--neon-rose)";
        exp.style.color = "#fda4af";
        exp.innerHTML = `<strong>❌ Incorrecto.</strong><br>${q.exp}`;
      }

      document.getElementById('quiz-next-btn').style.display = 'inline-flex';
    }

    function nextQuizStep() {
      playTone('click');
      quizIdx++;
      if (quizIdx < quizQuestions.length) {
        renderQuizQuestion();
      } else {
        document.getElementById('quiz-screen-q').style.display = 'none';
        const res = document.getElementById('quiz-screen-res');
        res.style.display = 'block';
        document.getElementById('quiz-res-score').textContent = `${quizPoints}/${quizQuestions.length}`;
        const resTitle = document.getElementById('quiz-res-title');
        const resDesc = document.getElementById('quiz-res-desc');
        if (quizPoints >= 4) {
          resTitle.textContent = '¡Maestro Sistémico Neguentrópico!';
          resDesc.textContent = 'Has dominado las leyes de la entropía, la neguentropía y los modelos de sistemas abiertos propuestos por Ludwig von Bertalanffy.';
        } else if (quizPoints >= 2) {
          resTitle.textContent = '¡Buen Progreso Sistémico!';
          resDesc.textContent = 'Comprendes los conceptos base. Puedes repasar los módulos y reintentar la prueba para alcanzar la puntuación máxima.';
        } else {
          resTitle.textContent = 'Sistema en Riesgo Entrópico';
          resDesc.textContent = 'Te recomendamos revisar los módulos teóricos y volver a intentar la prueba para consolidar tu aprendizaje.';
        }
        triggerConfetti();
      }
    }

    function resetQuiz() {
      playTone('click');
      quizIdx = 0;
      quizPoints = 0;
      document.getElementById('quiz-screen-res').style.display = 'none';
      document.getElementById('quiz-screen-q').style.display = 'block';
      renderQuizQuestion();
    }

    // Navegación SPA por módulos (Inicio + Tema individual con retorno al principio)
    const SPA_MODULE_ORDER = [
      { id: 'inicio', label: '🏠 Principio / Inicio' },
      { id: 'modelo-termodinamico', label: '1.1 Flujo Entrópico E-P-S-R' },
      { id: 'taller-clasificacion', label: '1.2 Taller Entropía vs Neguentropía' },
      { id: 'fundamentos-teoricos', label: '2.1 Fundamentos & Leyes' },
      { id: 'casos-reales', label: '2.2 Casos Reales Comparativos' },
      { id: 'casos-decisiones', label: '3.1 Toma de Decisiones' },
      { id: 'laboratorio-juegos', label: '🕹️ Laboratorio & Simulador' },
      { id: 'videos-espanol', label: '📺 Videos en Español' },
      { id: 'prueba-comandante', label: '🎖️ Prueba Evaluativa' },
      { id: 'cierre-sistemico', label: '📜 Síntesis & Cierre' }
    ];

    function openModule(sectionId, withSound = true) {
      const target = document.getElementById(sectionId);
      if (!target) return;

      if (typeof stopVoiceNarration === 'function') stopVoiceNarration();
      if (withSound) playTone('click');

      document.querySelectorAll('section.section').forEach(sec => {
        if (sec.id === sectionId) {
          sec.classList.remove('spa-hidden');
          sec.classList.add('spa-active');
        } else {
          sec.classList.remove('spa-active');
          sec.classList.add('spa-hidden');
        }
      });

      const navList = document.querySelector('.module-nav-list');
      document.querySelectorAll('.module-nav-item a').forEach(link => {
        const href = link.getAttribute('href');
        const isMatch = href === `#${sectionId}`;
        link.classList.toggle('active', isMatch);
        if (isMatch && navList) {
          const targetLeft = link.offsetLeft - (navList.clientWidth / 2) + (link.offsetWidth / 2);
          navList.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function injectModuleReturnBars() {
      SPA_MODULE_ORDER.forEach((mod, idx) => {
        if (mod.id === 'inicio') return;
        const sec = document.getElementById(mod.id);
        if (!sec) return;
        const container = Array.from(sec.children).find(el => el.classList && el.classList.contains('container')) || sec;
        if (container.querySelector('.module-return-bar')) return;

        const nextMod = SPA_MODULE_ORDER[idx + 1];
        const bar = document.createElement('div');
        bar.className = 'module-return-bar';

        const nextButtonHtml = nextMod
          ? `<button type="button" class="btn btn-gradient" onclick="openModule('${nextMod.id}')">Siguiente: ${nextMod.label} →</button>`
          : `<button type="button" class="btn btn-gradient" onclick="openModule('inicio')">🏠 Finalizar y Volver al Principio</button>`;

        bar.innerHTML = `
          <div class="module-return-info">
            <small>Módulo completado · ${mod.label}</small>
            <strong>¿Terminaste de revisar este tema?</strong>
          </div>
          <div class="module-return-actions">
            <button type="button" class="btn btn-secondary" onclick="openModule('inicio')">⬅️ Volver al Principio (Inicio)</button>
            ${nextButtonHtml}
          </div>
        `;
        container.appendChild(bar);
      });
    }

    // Interceptar clics en la barra superior de navegación
    document.querySelectorAll('.module-nav-item a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          openModule(href.slice(1));
        }
      });
    });

    // Botón flotante para regresar al principio
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    function scrollToTop() {
      openModule('inicio');
    }

    /* ==========================================================================
       CONTROL DEL AGENTE ROBOT EN TEORÍA DE SISTEMAS (HOMEOSTASIS INTERACTIVA)
       ========================================================================== */
    let robotEntropy = 15;
    let robotNegentropy = 85;

    function triggerRobotPerturbation() {
      playTone('error');
      robotEntropy = Math.min(95, robotEntropy + 30);
      robotNegentropy = Math.max(5, 100 - robotEntropy);
      updateRobotMood();
    }

    function triggerRobotHomeostasis() {
      playTone('success');
      robotEntropy = Math.max(10, robotEntropy - 25);
      robotNegentropy = Math.min(90, 100 - robotEntropy);
      addXP(40, true);
      updateRobotMood();
    }

    function updateRobotMood() {
      const icon = document.getElementById('robot-mood-icon');
      const title = document.getElementById('robot-status-title');
      const sub = document.getElementById('robot-status-sub');
      if (!icon || !title || !sub) return;

      if (robotEntropy > 60) {
        icon.textContent = '🚨';
        title.textContent = 'RoboTGS: ¡Perturbación Entrópica Crítica Detectada!';
        title.style.color = 'var(--neon-rose)';
      } else if (robotEntropy > 35) {
        icon.textContent = '⚠️';
        title.textContent = 'RoboTGS: Compensando Flujo Entrópico con Feedback';
        title.style.color = 'var(--neon-amber)';
      } else {
        icon.textContent = '🤖';
        title.textContent = 'RoboTGS: Operando en Homeostasis Neguentrópica Óptima';
        title.style.color = '#ffffff';
      }
      sub.textContent = `Nivel de Entropía Interna: ${Math.round(robotEntropy)}% · Neguentropía Activa: ${Math.round(robotNegentropy)}%`;
    }

    function playYouTubeVideo(btn, videoId) {
      addXP(25, 'Recurso Audiovisual Reproducido');
      if (window.location.protocol === 'file:') {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
        return;
      }
      const box = btn.closest('.video-embed-box');
      if (!box) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = 'Reproductor de Video TGS';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(iframe);
    }

    renderQuizQuestion();
    updateHUD();

    /* ==========================================================================
       BARRA DE ACCESIBILIDAD: TEMA, TAMAÑO DE LETRA, VOZ Y FICHA TÉCNICA
       ========================================================================== */
    let currentFontSizePx = 16;

    function applyThemeMode(isLight) {
      document.body.classList.toggle('light-theme', isLight);
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) btn.textContent = isLight ? '☀️' : '🌙';
    }

    function toggleThemeMode() {
      playTone('click');
      const isLight = !document.body.classList.contains('light-theme');
      applyThemeMode(isLight);
      try { localStorage.setItem('ova_theme', isLight ? 'light' : 'dark'); } catch (e) {}
    }

    function adjustFontSize(delta) {
      playTone('click');
      currentFontSizePx = Math.min(22, Math.max(12, currentFontSizePx + delta * 2));
      document.documentElement.style.fontSize = `${currentFontSizePx}px`;
      try { localStorage.setItem('ova_font_size', String(currentFontSizePx)); } catch (e) {}
    }

    var isVoiceSpeaking = false;
    var voiceChunks = [];
    var voiceChunkIdx = 0;

    function stopVoiceNarration() {
      isVoiceSpeaking = false;
      voiceChunks = [];
      voiceChunkIdx = 0;
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      const btn = document.getElementById('voice-toggle-btn');
      if (btn) {
        btn.textContent = '🔊 Leer Voz';
        btn.classList.remove('speaking');
      }
    }

    function pickSpanishVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices() || [];
      return voices.find(v => /es[-_](CO|ES|MX|419)/i.test(v.lang))
        || voices.find(v => /^es/i.test(v.lang))
        || null;
    }

    function splitTextIntoChunks(text, maxLen = 175) {
      const sentences = text.split(/(?<=[.!?])\s+/);
      const chunks = [];
      let current = '';
      for (const s of sentences) {
        if ((current + ' ' + s).trim().length <= maxLen) {
          current = (current + ' ' + s).trim();
        } else {
          if (current) chunks.push(current);
          if (s.length <= maxLen) {
            current = s;
          } else {
            const words = s.split(/\s+/);
            let part = '';
            for (const w of words) {
              if ((part + ' ' + w).trim().length <= maxLen) {
                part = (part + ' ' + w).trim();
              } else {
                if (part) chunks.push(part);
                part = w;
              }
            }
            current = part;
          }
        }
      }
      if (current) chunks.push(current);
      return chunks;
    }

    function speakNextVoiceChunk() {
      if (!isVoiceSpeaking || voiceChunkIdx >= voiceChunks.length) {
        stopVoiceNarration();
        return;
      }
      const chunk = voiceChunks[voiceChunkIdx++];
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = 'es-ES';
      utterance.rate = 1.0;
      const esVoice = pickSpanishVoice();
      if (esVoice) utterance.voice = esVoice;

      utterance.onend = () => {
        if (isVoiceSpeaking) speakNextVoiceChunk();
      };
      utterance.onerror = () => {
        if (isVoiceSpeaking) speakNextVoiceChunk();
      };

      try {
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        stopVoiceNarration();
      }
    }

    function toggleVoiceNarration() {
      if (!('speechSynthesis' in window)) {
        alert('Tu navegador no soporta la síntesis de voz.');
        return;
      }
      if (isVoiceSpeaking) {
        stopVoiceNarration();
        return;
      }

      const activeSec = document.querySelector('section.section.spa-active') || document.getElementById('inicio');
      if (!activeSec) return;

      const rawText = (activeSec.innerText || activeSec.textContent || '')
        .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/gu, ' ')
        .replace(/[→←⬆⬇•·▪▸▹◆◇★☆✓✔✕✖]/g, ' ')
        .replace(/\/\//g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 3500);

      if (!rawText) return;

      try { window.speechSynthesis.cancel(); } catch (e) {}
      voiceChunks = splitTextIntoChunks(rawText, 175);
      voiceChunkIdx = 0;
      isVoiceSpeaking = true;

      const btn = document.getElementById('voice-toggle-btn');
      if (btn) {
        btn.textContent = '⏹️ Detener Voz';
        btn.classList.add('speaking');
      }

      setTimeout(() => {
        if (isVoiceSpeaking) speakNextVoiceChunk();
      }, 60);
    }

    function openFichaTecnica() {
      playTone('click');
      const modal = document.getElementById('ficha-tecnica-modal');
      if (modal) modal.classList.add('open');
    }

    function closeFichaTecnica() {
      playTone('click');
      const modal = document.getElementById('ficha-tecnica-modal');
      if (modal) modal.classList.remove('open');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFichaTecnica();
    });

    (function initA11yPreferences() {
      try {
        if (localStorage.getItem('ova_theme') === 'light') applyThemeMode(true);
        const savedSize = parseInt(localStorage.getItem('ova_font_size'), 10);
        if (!isNaN(savedSize) && savedSize >= 12 && savedSize <= 22) {
          currentFontSizePx = savedSize;
          document.documentElement.style.fontSize = `${currentFontSizePx}px`;
        }
      } catch (e) {}
    })();

    /* ==========================================================================
       SELECTOR DE PESTAÑAS DE JUEGOS Y JUEGO 3 (ACOPLAMIENTO SISTÉMICO)
       ========================================================================== */
    function switchLabGame(gameNum) {
      playTone('click');
      document.querySelectorAll('.game-tab-pill').forEach(btn => {
        const isMatch = String(btn.getAttribute('data-game-tab')) === String(gameNum);
        btn.classList.toggle('active', isMatch);
      });
      document.querySelectorAll('.games-grid .game-box').forEach(box => {
        const isMatch = String(box.getAttribute('data-game')) === String(gameNum);
        box.classList.toggle('game-hidden', !isMatch);
      });
    }

    const G3_CHALLENGES = [
      {
        tag: 'INFRAESTRUCTURA CLOUD',
        prompt: 'Un clúster de microservicios entra en latencia extrema y saturación de memoria porque no tiene límite de peticiones ni autoescalado.',
        options: [
          'Acoplar balanceador de carga + circuit breaker + monitoreo en tiempo real',
          'Desconectar los registros de auditoría para ahorrar disco',
          'Aislar el servidor de la red para evitar más tráfico'
        ],
        correct: 0
      },
      {
        tag: 'SISTEMA BIOLÓGICO',
        prompt: 'Una célula reduce su síntesis proteica y acumula radicales libres que degradan su membrana celular.',
        options: [
          'Cerrar completamente el intercambio osmótico con el medio extracelular',
          'Importar nutrientes/ATP y activar enzimas reparadoras (neguentropía metabólica)',
          'Detener la replicación de ADN indefinidamente'
        ],
        correct: 1
      },
      {
        tag: 'ORGANIZACIÓN EMPRESARIAL',
        prompt: 'Una empresa tecnológica lanza actualizaciones sin escuchar quejas de usuarios y pierde el 40% de sus clientes.',
        options: [
          'Eliminar el canal de soporte técnico para reducir costos',
          'Mantener los mismos procesos internos sin medir resultados',
          'Implementar bucle de retroalimentación negativa con métricas de satisfacción'
        ],
        correct: 2
      },
      {
        tag: 'ARQUITECTURA DE SOFTWARE',
        prompt: 'Un repositorio legado presenta acoplamiento rígido, código duplicado y fallos frecuentes tras cada despliegue.',
        options: [
          'Desactivar las pruebas unitarias para desplegar más rápido',
          'Aplicar refactorización modular + integración continua (CI/CD)',
          'Duplicar el proyecto en carpetas separadas por cada desarrollador'
        ],
        correct: 1
      },
      {
        tag: 'ECOSISTEMA NATURAL',
        prompt: 'Un lago cerrado queda desconectado de sus afluentes de agua limpia y acumula exceso de materia orgánica sin oxígeno.',
        options: [
          'Restablecer flujo hídrico y oxigenación desde el entorno (sistema abierto)',
          'Cubrir la superficie para impedir la entrada de luz solar',
          'Aislar por completo el estanque de cualquier especie biológica'
        ],
        correct: 0
      }
    ];

    let g3Idx = 0;
    let g3Score = 0;
    let g3Locked = false;

    function startG3() {
      playTone('click');
      g3Idx = 0;
      g3Score = 0;
      g3Locked = false;
      document.getElementById('g3-start-screen').style.display = 'none';
      document.getElementById('g3-end-screen').style.display = 'none';
      document.getElementById('g3-play-screen').style.display = 'block';
      document.getElementById('g3-score').textContent = '0';
      renderG3Step();
    }

    function renderG3Step() {
      if (g3Idx >= G3_CHALLENGES.length) {
        document.getElementById('g3-play-screen').style.display = 'none';
        document.getElementById('g3-end-screen').style.display = 'block';
        document.getElementById('g3-final-score').textContent = String(g3Score);
        if (g3Score >= 4) addXP(80, true);
        return;
      }

      g3Locked = false;
      const item = G3_CHALLENGES[g3Idx];
      document.getElementById('g3-step').textContent = String(g3Idx + 1);
      document.getElementById('g3-system-tag').textContent = item.tag;
      document.getElementById('g3-prompt').textContent = item.prompt;
      document.getElementById('g3-feedback').textContent = '';

      const optsWrap = document.getElementById('g3-options');
      optsWrap.innerHTML = '';
      item.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-secondary';
        btn.style.cssText = 'text-align: left; justify-content: flex-start; font-size: 0.84rem; padding: 0.65rem 0.9rem;';
        btn.textContent = optText;
        btn.onclick = () => answerG3(i);
        optsWrap.appendChild(btn);
      });
    }

    function answerG3(choiceIdx) {
      if (g3Locked) return;
      g3Locked = true;
      const item = G3_CHALLENGES[g3Idx];
      const fb = document.getElementById('g3-feedback');

      if (choiceIdx === item.correct) {
        g3Score++;
        document.getElementById('g3-score').textContent = String(g3Score);
        fb.style.color = '#6ee7b7';
        fb.textContent = '✅ ¡Acoplamiento neguentrópico correcto! (+20 XP)';
        playTone('success');
        addXP(20, false);
      } else {
        fb.style.color = '#fda4af';
        fb.textContent = '❌ Esa acción incrementa la entropía del sistema.';
        playTone('error');
      }

      setTimeout(() => {
        g3Idx++;
        renderG3Step();
      }, 950);
    }

    // Inicializar vista SPA al final, con todas las funciones y variables listas
    injectModuleReturnBars();
    openModule('inicio', false);

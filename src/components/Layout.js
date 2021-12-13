import React, { PureComponent } from "react";
import Particles from "react-tsparticles";
const particlesInit = (main) => {
  return true
};
const particlesLoaded = (container) => {
  return true
};
class Layout extends PureComponent {
  render() {
    return (
      <div className="layout">
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#0D0C1D"
              }
            },
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 60,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push"
                },
                "onHover": {
                  "enable": true,
                  "mode": "repulse",
                  "parallax": {
                    "enable": true,
                    "force": 10,
                    "smooth": 10
                  }
                },
                "resize": true
              },
              "modes": {
                "attract": {
                  "distance": 550,
                  "duration": 0.5,
                  "easing": "ease-out-sine",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "repulse": {
                  "distance": 250,
                  "duration": 1,
                  "factor": 10,
                  "speed": 0.2,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad"
                },
              }
            },
            "manualParticles": [],
            "particles": {
              "color": {
                "value": "#ffffff",
              },
              "destroy": {
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                  },
                  "value": 0,
                  "sync": false
                }
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#FFFFFF"
                },
                "consent": false,
                "distance": 150,
                "enable": false,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#FFFFFF"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "move": {
                "angle": {
                  "offset": 1,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 600
                  }
                },
                "decay": 1,
                "direction": "none",
                "drift": 0,
                "enable": false,
                "gravity": {
                  "acceleration": 0.11,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 0.5
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": true,
                "size": false,
                "speed": 1,
                "spin": {
                  "acceleration": 0.1,
                  "enable": true
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fillColor": {
                    "value": "#FFFFFF"
                  }
                },
                "vibrate": true,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 160
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0,
                  "max": 1
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 1,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                  "minimumValue": 0
                }
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 45
                },
                "width": 1
              },
              "reduceDuplicates": false,
              "repulse": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "rotate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 1
                },
                "value": {
                  "min": 1,
                  "max": 3
                },
              },
              "stroke": {
                "width": 2
              },
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "zLayers": 100
          }}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;

"use client";

import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

function WordmarkPaths() {
  return (
    <>
<path d="M 53.6 0.2 L 53.9 0.2 Q 55.849 0.2 56.391 0.617 A 0.473 0.473 0 0 1 56.6 1 Q 56.6 1.6 54.7 2.1 A 11.333 11.333 0 0 0 53.526 2.424 Q 51.788 2.992 49.1 4.3 A 103.15 103.15 0 0 0 45.34 6.232 Q 43.375 7.289 41.236 8.533 A 168.38 168.38 0 0 0 40.95 8.7 Q 36.5 11.3 32.15 14.25 Q 27.8 17.2 24.5 20 Q 21.596 22.464 20.318 24.386 A 8.956 8.956 0 0 0 20 24.9 Q 19.2 26.3 18.7 27.8 A 9.908 9.908 0 0 0 18.208 30.578 A 11.314 11.314 0 0 0 18.2 31 Q 18.2 34.3 20.3 38.2 Q 24.4 45.5 29.8 51.85 Q 35.2 58.2 41.1 61.4 Q 42.3 62.1 44.75 63.15 A 15.039 15.039 0 0 0 46.595 63.81 Q 47.591 64.09 48.501 64.169 A 8.095 8.095 0 0 0 49.2 64.2 A 4.01 4.01 0 0 0 50.216 64.077 A 3.162 3.162 0 0 0 51.25 63.6 A 1.995 1.995 0 0 0 51.925 62.746 Q 52.151 62.23 52.2 61.5 L 52.2 61.1 A 9.223 9.223 0 0 0 51.775 58.401 Q 51.443 57.313 50.851 56.174 A 16.389 16.389 0 0 0 50.65 55.8 Q 49.1 53 47.8 51.1 A 17.283 17.283 0 0 1 47.41 50.404 Q 46.8 49.247 46.8 48.7 A 1.052 1.052 0 0 1 46.821 48.477 Q 46.891 48.156 47.19 48.108 A 0.702 0.702 0 0 1 47.3 48.1 A 1.997 1.997 0 0 1 48.099 48.286 Q 49.031 48.694 50.2 50 Q 51.059 50.859 51.993 52.051 A 32.805 32.805 0 0 1 52.3 52.45 Q 53.4 53.9 54.2 55.4 A 24.127 24.127 0 0 1 55.36 57.793 Q 56.4 60.306 56.4 62.3 A 7.275 7.275 0 0 1 56.059 64.59 A 5.67 5.67 0 0 1 53.45 67.75 Q 50.5 69.5 46.4 69.5 Q 43.5 69.5 40.45 68.7 Q 37.4 67.9 34.8 66.4 A 44.672 44.672 0 0 1 28.98 62.363 A 54.398 54.398 0 0 1 26 59.75 Q 21.7 55.7 18.35 50.85 A 52.356 52.356 0 0 1 14.806 44.958 A 42.953 42.953 0 0 1 13.1 41.2 Q 12.1 38.6 11.5 36.35 A 17.733 17.733 0 0 1 10.962 33.361 A 15.264 15.264 0 0 1 10.9 32 A 11.833 11.833 0 0 1 12.091 26.867 A 13.953 13.953 0 0 1 12.35 26.35 Q 13.8 23.6 17.2 20.5 A 68.632 68.632 0 0 1 19.176 18.841 Q 20.072 18.114 21.091 17.329 A 136.703 136.703 0 0 1 23.25 15.7 A 111.095 111.095 0 0 1 28.086 12.325 A 132.963 132.963 0 0 1 31.25 10.3 A 168.333 168.333 0 0 1 39.318 5.589 A 154.391 154.391 0 0 1 39.85 5.3 Q 44.1 3 47.75 1.6 Q 51.08 0.323 53.203 0.211 A 7.54 7.54 0 0 1 53.6 0.2 Z M 180.2 55.6 L 180.2 56 A 5.08 5.08 0 0 1 180.176 56.477 Q 180.125 57.007 179.972 57.703 A 15.984 15.984 0 0 1 179.95 57.8 Q 179.7 58.9 179.3 60 Q 178.1 63.7 175.75 66.45 A 7.673 7.673 0 0 1 170.949 69.069 A 11.169 11.169 0 0 1 169.2 69.2 A 5.812 5.812 0 0 1 167.205 68.873 A 4.95 4.95 0 0 1 164.85 67.05 Q 163.48 65.15 162.774 62.273 A 21.077 21.077 0 0 1 162.6 61.5 Q 162.2 59.6 162.05 57.7 Q 161.9 55.8 161.9 53.9 Q 161.9 49.2 162.55 44.55 Q 163.2 39.9 163.2 35.6 A 10.031 10.031 0 0 0 162.986 33.504 A 9.057 9.057 0 0 0 162.85 32.95 Q 162.522 31.779 161.448 31.705 A 2.157 2.157 0 0 0 161.3 31.7 A 1.697 1.697 0 0 0 160.522 31.914 Q 159.582 32.401 158.4 34 A 17.57 17.57 0 0 0 157.274 35.665 Q 156.184 37.47 155.056 40.086 A 58.61 58.61 0 0 0 154.9 40.45 A 50.14 50.14 0 0 0 153.065 45.579 A 64.984 64.984 0 0 0 151.9 50.05 Q 150.7 55.4 150.7 61 Q 150.7 64.4 151.3 67.9 A 7.84 7.84 0 0 1 150.719 68.275 Q 150.188 68.588 149.5 68.9 A 6.543 6.543 0 0 1 148.703 69.205 Q 148.263 69.339 147.859 69.381 A 3.472 3.472 0 0 1 147.5 69.4 A 3.027 3.027 0 0 1 145.255 68.462 A 3.76 3.76 0 0 1 145.15 68.35 A 3.004 3.004 0 0 1 144.59 67.408 Q 144.253 66.539 144.207 65.227 A 12.185 12.185 0 0 1 144.2 64.8 L 144.2 63.95 A 4.546 4.546 0 0 1 144.243 63.338 A 5.501 5.501 0 0 1 144.3 63 Q 144.453 61.622 144.636 59.423 A 297.212 297.212 0 0 0 144.75 58 A 151.63 151.63 0 0 0 144.972 54.656 Q 145.071 52.888 145.145 50.927 A 245.343 245.343 0 0 0 145.15 50.8 Q 145.3 46.8 145.3 42.8 A 126.151 126.151 0 0 0 145.182 37.238 A 106.684 106.684 0 0 0 145.05 34.85 A 51.304 51.304 0 0 0 144.86 32.658 Q 144.613 30.413 144.2 28.9 Q 145 28.7 146.3 27.8 A 7.916 7.916 0 0 1 148.007 26.893 A 6.887 6.887 0 0 1 149 26.6 A 1.634 1.634 0 0 1 149.23 26.543 Q 149.472 26.5 149.8 26.5 Q 151.136 26.5 151.7 27.611 A 3.273 3.273 0 0 1 151.95 28.3 Q 152.3 29.699 152.378 31.582 A 27.072 27.072 0 0 1 152.4 32.7 Q 152.4 33.938 152.376 35.482 A 287.827 287.827 0 0 1 152.35 36.95 Q 152.312 38.826 152.186 40.321 A 33.479 33.479 0 0 1 152.1 41.2 Q 153.127 38.213 154.328 35.966 A 25.193 25.193 0 0 1 154.5 35.65 Q 155.8 33.3 157.3 31.1 Q 158.8 28.8 160.5 26.55 A 5.385 5.385 0 0 1 164.394 24.335 A 6.94 6.94 0 0 1 165.1 24.3 Q 168.1 24.3 169 26.3 A 10.333 10.333 0 0 1 169.873 29.887 A 12.28 12.28 0 0 1 169.9 30.7 A 30.297 30.297 0 0 1 169.861 32.267 A 25.336 25.336 0 0 1 169.8 33.15 Q 169.7 34.3 169.6 35.3 A 7.113 7.113 0 0 1 169.589 35.642 Q 169.547 36.481 169.337 38.58 A 230.363 230.363 0 0 1 169.3 38.95 Q 169 41.9 168.7 45.85 Q 168.4 49.8 168.4 53.8 A 31.857 31.857 0 0 0 168.406 54.403 Q 168.425 55.388 168.5 56.85 Q 168.6 58.8 168.9 60.75 A 12.229 12.229 0 0 0 169.245 62.328 Q 169.481 63.136 169.821 63.806 A 7.155 7.155 0 0 0 169.95 64.05 A 3.264 3.264 0 0 0 170.444 64.733 A 2.08 2.08 0 0 0 172 65.4 A 2.583 2.583 0 0 0 172.711 65.293 Q 173.222 65.147 173.8 64.8 A 7.407 7.407 0 0 0 175.18 63.482 A 9.188 9.188 0 0 0 175.75 62.7 A 14.615 14.615 0 0 0 176.734 60.953 A 12.443 12.443 0 0 0 177.1 60.1 Q 177.5 59.2 177.9 58.1 A 23.111 23.111 0 0 0 178.581 55.875 A 25.179 25.179 0 0 0 178.6 55.8 A 3.665 3.665 0 0 1 178.786 55.34 Q 179.028 54.849 179.352 54.684 A 0.757 0.757 0 0 1 179.7 54.6 A 0.399 0.399 0 0 1 180.073 54.846 Q 180.172 55.041 180.194 55.388 A 3.366 3.366 0 0 1 180.2 55.6 Z M 114.3 69 L 114.2 69 A 4.521 4.521 0 0 1 110.801 67.486 A 6.848 6.848 0 0 1 110.2 66.75 A 12.308 12.308 0 0 1 108.953 64.504 Q 108.47 63.388 108.106 62.056 A 24.133 24.133 0 0 1 107.8 60.8 A 35.424 35.424 0 0 1 107.095 55.685 A 43.054 43.054 0 0 1 107 52.8 L 107 51.8 Q 107 47.8 107.7 42.95 Q 108.4 38.1 110.2 33.7 A 21.202 21.202 0 0 1 112.732 29.131 A 17.983 17.983 0 0 1 115.15 26.45 Q 118.3 23.6 123.2 23.6 A 7.332 7.332 0 0 1 125.595 23.984 A 6.735 6.735 0 0 1 126.65 24.45 Q 128.2 25.3 128.9 26.9 Q 129.6 26.1 130.8 25.6 A 6.085 6.085 0 0 1 132.035 25.241 Q 132.63 25.131 133.312 25.107 A 10.983 10.983 0 0 1 133.7 25.1 A 8.603 8.603 0 0 1 134.316 25.124 Q 134.663 25.149 135.05 25.2 A 13.611 13.611 0 0 1 136.203 25.406 A 15.502 15.502 0 0 1 136.6 25.5 Q 136 27.8 135.2 31.8 A 97.534 97.534 0 0 0 134.379 36.537 A 123.688 123.688 0 0 0 133.85 40.55 A 81.333 81.333 0 0 0 133.309 48.671 A 74.411 74.411 0 0 0 133.3 49.8 L 133.3 50.2 Q 133.3 52.1 133.5 54.7 Q 133.7 57.3 134.2 59.8 A 19.959 19.959 0 0 0 134.672 61.699 Q 135.066 62.991 135.6 64 A 4.61 4.61 0 0 0 136.111 64.781 Q 136.449 65.19 136.841 65.417 A 2.075 2.075 0 0 0 137.9 65.7 L 138 65.7 Q 138.588 65.7 139.256 65.269 A 4.881 4.881 0 0 0 139.75 64.9 A 4.45 4.45 0 0 0 140.296 64.339 Q 141.009 63.481 141.8 61.9 Q 142.919 59.736 143.927 56.626 A 61.37 61.37 0 0 0 144.6 54.4 A 2.188 2.188 0 0 1 144.704 54.055 Q 144.774 53.884 144.866 53.765 A 0.648 0.648 0 0 1 145.4 53.5 A 0.368 0.368 0 0 1 145.728 53.706 Q 145.893 53.984 145.9 54.64 A 5.542 5.542 0 0 1 145.9 54.7 L 145.9 55.1 Q 145.7 57.7 144.5 61 Q 143.3 64.3 141.15 66.7 A 7.539 7.539 0 0 1 139.145 68.319 A 6.473 6.473 0 0 1 136 69.1 A 7.996 7.996 0 0 1 133.72 68.791 A 6.193 6.193 0 0 1 131 67.15 A 11.977 11.977 0 0 1 128.962 64.293 A 15.754 15.754 0 0 1 128.05 62.15 Q 127 59.1 126.6 55.95 Q 126.278 53.415 126.215 51.366 A 31.525 31.525 0 0 1 126.2 50.4 Q 125 54.9 123.15 59.2 Q 121.3 63.5 119.1 66.25 Q 117.613 68.109 115.943 68.711 A 4.807 4.807 0 0 1 114.3 69 Z M 89.5 50.9 L 89.5 49.4 Q 89.582 48.415 89.664 46.017 A 287.097 287.097 0 0 0 89.7 44.9 A 404.518 404.518 0 0 1 89.789 42.263 Q 89.875 39.931 90 37.15 Q 90.2 32.7 90.6 28.1 L 87.5 28.1 Q 86.778 28.1 86.708 27.286 A 2.155 2.155 0 0 1 86.7 27.1 Q 86.7 26.646 86.989 26.15 A 3.018 3.018 0 0 1 87.05 26.05 Q 87.4 25.5 87.9 25.5 L 90.8 25.5 Q 91.2 20.8 91.7 17 Q 92.2 13.2 92.9 11.6 A 3.963 3.963 0 0 1 93.657 10.502 Q 94.023 10.119 94.514 9.776 A 7.183 7.183 0 0 1 94.7 9.65 A 4.736 4.736 0 0 1 96.036 9.062 Q 96.626 8.898 97.324 8.837 A 10.022 10.022 0 0 1 98.2 8.8 A 8.603 8.603 0 0 1 98.816 8.824 Q 99.163 8.849 99.55 8.9 Q 100.3 9 101 9.2 A 16.576 16.576 0 0 0 100.743 10.213 Q 100.357 11.922 99.894 15.048 A 157.364 157.364 0 0 0 99.85 15.35 Q 99.243 19.505 98.767 24.749 A 247.73 247.73 0 0 0 98.7 25.5 L 106.7 25.5 A 1.04 1.04 0 0 1 107.092 25.568 Q 107.6 25.774 107.6 26.6 A 1.789 1.789 0 0 1 107.46 27.284 A 2.346 2.346 0 0 1 107.3 27.6 Q 107 28.1 106.4 28.1 L 98.4 28.1 A 287.211 287.211 0 0 0 97.638 38.72 A 313.591 313.591 0 0 0 97.6 39.45 Q 97.3 45.3 97.2 50.2 L 97.2 52.5 Q 97.2 55.1 97.4 58.2 A 24.778 24.778 0 0 0 97.662 60.57 Q 97.855 61.763 98.163 62.784 A 13.427 13.427 0 0 0 98.4 63.5 A 5.552 5.552 0 0 0 98.819 64.41 Q 99.091 64.874 99.423 65.171 A 2.003 2.003 0 0 0 100.8 65.7 L 100.9 65.7 Q 101.488 65.7 102.156 65.269 A 4.881 4.881 0 0 0 102.65 64.9 A 4.45 4.45 0 0 0 103.196 64.339 Q 103.909 63.481 104.7 61.9 Q 105.5 60.5 106.15 58.55 Q 106.8 56.6 107.5 54.4 Q 107.9 53.5 108.3 53.5 A 0.368 0.368 0 0 1 108.628 53.706 Q 108.793 53.984 108.8 54.64 A 5.542 5.542 0 0 1 108.8 54.7 L 108.8 55.1 Q 108.6 57.7 107.4 61 Q 106.2 64.3 104.05 66.7 A 7.539 7.539 0 0 1 102.045 68.319 A 6.473 6.473 0 0 1 98.9 69.1 Q 95.9 69.1 94.05 67.2 A 11.797 11.797 0 0 1 91.948 64.196 A 15.038 15.038 0 0 1 91.2 62.4 Q 90.2 59.5 89.85 56.4 Q 89.5 53.3 89.5 50.9 Z M 14.8 68.1 L 14.8 68.3 A 6.1 6.1 0 0 1 14.469 70.249 A 7.73 7.73 0 0 1 14.1 71.15 Q 13.4 72.6 11.9 73.3 Q 10.7 73.9 9.5 73.9 Q 7.6 73.9 6.05 72.55 A 11.871 11.871 0 0 1 3.483 69.359 A 13.36 13.36 0 0 1 3.45 69.3 A 19.017 19.017 0 0 1 2.443 67.194 A 15.176 15.176 0 0 1 1.9 65.6 Q 0.9 61.6 0.45 56.4 A 121.612 121.612 0 0 1 0.044 48.967 A 142.407 142.407 0 0 1 0 45.4 Q 0 39.1 0.45 32.5 Q 0.9 25.9 1.7 19.75 Q 2.5 13.6 3.55 8.6 Q 4.306 5.001 5.087 2.335 A 44.334 44.334 0 0 1 5.7 0.4 Q 5.8 0.1 6.15 0.05 Q 6.5 0 6.8 0 A 13.624 13.624 0 0 1 8.273 0.074 Q 9.82 0.243 10.792 0.795 A 4.128 4.128 0 0 1 10.8 0.8 A 4.148 4.148 0 0 1 12.015 1.88 Q 12.404 2.381 12.719 3.042 A 8.839 8.839 0 0 1 13 3.7 A 135.601 135.601 0 0 0 12.828 4.456 Q 12.591 5.512 12.202 7.292 A 1235.698 1235.698 0 0 0 11.95 8.45 Q 11.434 10.822 10.824 13.879 A 543.316 543.316 0 0 0 10.25 16.8 Q 9.3 21.7 8.4 27.45 Q 7.5 33.2 6.85 39.1 A 159.29 159.29 0 0 0 6.091 48.424 A 142.203 142.203 0 0 0 6 50.5 A 44.631 44.631 0 0 1 5.972 52.04 A 51.515 51.515 0 0 1 5.95 52.6 Q 5.9 53.7 5.9 54.9 Q 5.9 58.3 6.25 61.75 A 26.396 26.396 0 0 0 6.604 64.176 Q 6.836 65.355 7.167 66.359 A 13.356 13.356 0 0 0 7.6 67.5 Q 8.244 68.982 9.304 69.509 A 2.869 2.869 0 0 0 10.6 69.8 Q 11.6 69.8 12.4 69.2 Q 13.059 68.706 13.379 68.143 A 2.424 2.424 0 0 0 13.5 67.9 Q 13.8 67.1 14.2 67.1 A 0.497 0.497 0 0 1 14.676 67.397 Q 14.787 67.618 14.799 68.004 A 3.095 3.095 0 0 1 14.8 68.1 Z M 67 50.2 L 67 50.7 A 35.053 35.053 0 0 0 67.332 55.61 A 29.505 29.505 0 0 0 67.85 58.35 A 15.962 15.962 0 0 0 68.722 61.003 Q 69.396 62.552 70.367 63.723 A 9.718 9.718 0 0 0 70.65 64.05 A 6.453 6.453 0 0 0 75.067 66.171 A 8.911 8.911 0 0 0 75.8 66.2 A 7.425 7.425 0 0 0 78.622 65.684 Q 80.35 64.981 81.547 63.321 A 8.791 8.791 0 0 0 81.8 62.95 Q 83.9 59.7 85.1 54.7 Q 85.2 54.3 85.45 53.95 A 1.775 1.775 0 0 1 85.557 53.814 Q 85.674 53.68 85.779 53.63 A 0.281 0.281 0 0 1 85.9 53.6 A 0.869 0.869 0 0 1 86.273 53.674 Q 86.749 53.898 86.706 54.797 A 3.552 3.552 0 0 1 86.7 54.9 A 21.215 21.215 0 0 1 85.614 59.689 A 19.751 19.751 0 0 1 85.5 60 A 32.915 32.915 0 0 1 84.693 61.966 Q 84.295 62.849 83.879 63.608 A 18.706 18.706 0 0 1 83.6 64.1 Q 81.7 67.2 79.05 68.85 A 10.521 10.521 0 0 1 75.673 70.184 Q 74.298 70.48 72.712 70.499 A 18.197 18.197 0 0 1 72.5 70.5 A 12.713 12.713 0 0 1 69.032 70.05 A 9.674 9.674 0 0 1 64.75 67.55 A 17.028 17.028 0 0 1 60.911 61.575 A 20.459 20.459 0 0 1 60.45 60.25 Q 59.1 55.9 59.1 51.7 Q 59.1 46.9 60.1 42.05 A 33.619 33.619 0 0 1 62.132 35.517 A 29.795 29.795 0 0 1 63.25 33.2 A 20.459 20.459 0 0 1 66.297 28.901 A 17.764 17.764 0 0 1 68.7 26.75 A 12.433 12.433 0 0 1 75.326 24.343 A 15.704 15.704 0 0 1 76.5 24.3 Q 79.7 24.3 81.5 26.2 Q 82.986 27.768 83.245 30.563 A 13.395 13.395 0 0 1 83.3 31.8 A 17.338 17.338 0 0 1 82.525 37.061 A 15.204 15.204 0 0 1 80.85 40.65 Q 78.4 44.5 74.7 46.9 A 24.208 24.208 0 0 1 68.797 49.715 A 22.12 22.12 0 0 1 67 50.2 Z M 117.7 60.8 A 2.404 2.404 0 0 0 119.099 60.328 Q 119.912 59.758 120.65 58.5 A 23.601 23.601 0 0 0 121.783 56.296 Q 122.481 54.756 123.1 52.9 A 99.65 99.65 0 0 0 124.581 48.063 A 87.956 87.956 0 0 0 125 46.5 Q 126.2 41.9 126.6 37.15 Q 127 32.4 128.3 27.8 A 4.569 4.569 0 0 0 127.378 27.021 A 3.285 3.285 0 0 0 125.6 26.5 A 4.984 4.984 0 0 0 123.48 27 Q 122.304 27.549 121.1 28.7 Q 118.8 30.9 117.5 33.7 Q 115.9 37.2 115.15 41.9 Q 114.4 46.6 114.4 50.9 Q 114.4 52 114.45 53.1 Q 114.5 54.2 114.6 55.2 A 16.76 16.76 0 0 0 114.759 56.674 Q 115.052 58.545 115.75 59.5 A 5.009 5.009 0 0 0 116.243 60.084 Q 116.948 60.79 117.679 60.8 A 1.536 1.536 0 0 0 117.7 60.8 Z M 67.1 47.8 L 67.1 47.9 Q 70.3 47.1 72.7 44.75 Q 75.1 42.4 76.45 39.2 Q 77.8 36 77.8 32.7 L 77.8 32.2 Q 77.8 30.4 77.25 28.8 A 3.061 3.061 0 0 0 76.885 28.054 Q 76.323 27.24 75.302 27.202 A 2.723 2.723 0 0 0 75.2 27.2 A 3.532 3.532 0 0 0 72.891 28.065 A 5.53 5.53 0 0 0 72.05 28.95 A 12.917 12.917 0 0 0 70.872 30.799 Q 70.37 31.747 69.943 32.872 A 22.731 22.731 0 0 0 69.75 33.4 Q 68.8 36.1 68.2 39 Q 67.6 41.9 67.35 44.3 A 82.526 82.526 0 0 0 67.241 45.419 Q 67.1 46.975 67.1 47.8 Z"  />
    </>
  );
}

export function WordmarkHoverEffect() {
  const containerRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (containerRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = containerRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={containerRef}
      className="size-full select-none"
      viewBox="0 0 180.2 73.9"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <defs>
        <linearGradient
          id="logoGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--color-yellow-500)"} />
              <stop offset="25%" stopColor={"var(--color-red-500)"} />
              <stop offset="50%" stopColor={"var(--color-blue-500)"} />
              <stop offset="75%" stopColor={"var(--color-cyan-500)"} />
              <stop offset="100%" stopColor={"var(--color-violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="15%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: 0, ease: "easeInOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask
          id="logoMask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="770"
          height="387"
          fill="black"
        >
          <rect fill="url(#revealMask)" width="770" height="387" />
          <WordmarkPaths />
        </mask>

        <mask
          id="pathOutsideMask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="770"
          height="387"
          fill="black"
        >
          <rect fill="white" width="770" height="387" />
          <WordmarkPaths />
        </mask>
      </defs>

      <g
        className="fill-transparent stroke-border"
        strokeWidth="2"
        mask="url(#pathOutsideMask)"
      >
        <WordmarkPaths />
      </g>

      <g
        className="fill-transparent"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        mask="url(#logoMask)"
      >
        <WordmarkPaths />
      </g>
    </svg>
  );
}

import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(array, algorithm = 'bubbleSort') {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  if (algorithm === 'bubbleSort') {
    array = bubbleSort(array);
  }

  snapshot(array);
}

function bubbleSort(nums) {
  let swapped = false;
  do {
      swapped = false;
      for (let i = 0; i < nums.length-1; i++) {
          snapshot(nums);
          if (nums[i] > nums[i+1]) {
              const temp = nums[i];
              nums[i] = nums[i+1];
              nums[i+1] = temp;
              swapped = true;
          }
      }
  } while(swapped);

  return nums;
}


export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}

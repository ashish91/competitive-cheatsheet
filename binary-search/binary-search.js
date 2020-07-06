// Iterative Binary Search
// O(log(N))
function binarySearch(arr, begin, end, target) {
  while (begin < end) {
    let mid = parseInt(begin + (end - begin)/2);

    if(arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      begin = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  return -1;
}

// Recursive Binary Search
// O(log(N))
function binarySearch(arr, begin, end, target) {
  if (begin > end) {
    return -1;
  }

  let mid = parseInt(begin + (end - begin)/2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, end, target);
  } else if (arr[mid] > target) {
    return binarySearch(arr, begin, mid - 1, target);
  }

  return -1;
}

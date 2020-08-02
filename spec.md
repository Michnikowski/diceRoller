1. Please write a script called `dice_roller.js`. When launched using shell (`node dice_roller.js`) it should display a randomly generated number from 1-20 range. Imagine this as rolling a twenty sided dice (k20).

2. In this iteration, running the `dice_roller.js` should return 5 randomly generated numbers (five dice rolls).
However, the script should obtain the set by initially generating 7 dice rolls and excluding the highest and the lowest ones! It is extremely important not to change the order of the numbers.

- remove from set first (on the left in the array) minimum and maximum value

3. The script should generate the sets until it meets the following criteria: 
  - the sum of the 5 randomly generated numbers is higher or equal to 55. Returning a set which doesn't sum up to at least 55, is not valid.
  - however, the rolls dropped by satisfying specification in the point 2) should not count to the `at least 55 rule`!

Additional comments:
- don't use rules from point 2
- generate only 5 numbers

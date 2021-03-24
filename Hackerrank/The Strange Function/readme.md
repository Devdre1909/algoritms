One of the most important skills a programmer needs to learn early on is the ability to pose a problem in an abstract way. This skill is important not just for researchers but also in applied fields like software engineering and web development.

You are able to solve most of a problem, except for one last subproblem, which you have posed in an abstract way as follows: Given an array consisting of n integers [a1, a2,...,an] , define

For example, for an input array [ 10, -5, 5, 20 ], a subsegment would be computed as follows:

What is , i.e., the maximum value of among all subsegments ?

Complete the function maximumValue which takes an integer array as input and returns the maximum value of among all subsegments .

Note that:

Input Format

The first line contains a single integer

The second line contains space-separated integers

Constraints

Output Format

Print a single integer denoting the answer

Sample Input 0

4
10 -5 5 20
Sample Output 0

50
Explanation 0

The maximum value occurs at as shown below.

image

Sample Input 1

5
7 12 24 6 5
Sample Output 1

144
Explanation 1

The maximum value occurs at .

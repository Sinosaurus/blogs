/*
 * @LastEditors: Sinosaurus
 * @url: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/41/
 */
var deleteNode = function (node) {
  // 第一步把当前节点的值用下一个节点值覆盖掉，第二步把当前节点的next指向下下个节点。
  node.val = node.next.val
  node.next = node.next.next
}

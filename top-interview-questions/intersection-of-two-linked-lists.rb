# # Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

# # @param {ListNode} headA
# # @param {ListNode} headB
# # @return {ListNode}
# def getIntersectionNode(headA, headB)
#   pa = headA
#   pb = headB
#   swapped = 0 # if there is no interesection you need to prevent infinite loop

#   while pa != pb
#     pa = pa.next || (swapped += 1) && headB
#     pb = pb.next || (swapped += 1) && headA
#     return nil if swapped >= 4
#   end

#   pa
# end

a1 = ListNode.new 4
a2 = ListNode.new 1
a3 = ListNode.new 8
a4 = ListNode.new 4
a5 = ListNode.new 5

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

b1 = ListNode.new 5
b2 = ListNode.new 6
b3 = ListNode.new 1
b4 = ListNode.new 8
b5 = ListNode.new 4
b6 = ListNode.new 5

b1.next = b2
b2.next = b3
b3.next = b4
b4.next = b5
b5.next = b6

# puts(getIntersectionNode(a1, b1))
def intersect(head1, head2)
  list1node = nil
  list1length = get_length(head1)
  list2node = nil
  list2length = get_length(head2)

  length_difference = 0
  if list1length >= list2length
    length_difference = list1length - list2length
    list1node = head1
    list2node = head2
  else
    length_difference = list2length - list1length
    list1node = head2
    list2node = head1
  end

  while length_difference > 0
    list1node = list1node.next
    length_difference -= 1
  end

  while list1node
    return list1node if list1node == list2node

    list1node = list1node.next
    list2node = list2node.next
  end

  nil
end

def main
  # list_head_1 = create_random_linked_list(5)
  # list_head_2 = create_random_linked_list(7)
  # node1 = LinkedListNode.new(8)
  # node2 = LinkedListNode.new(9)

  # intersect_node = intersect(list_head_1, list_head_2)
  # raise 'intersection found' unless intersect_node.nil?

  # insert_at_tail(list_head_1, node1)
  # insert_at_tail(list_head_1, node2)

  # insert_at_tail(list_head_2, node1)

  # print "\nList 1: "
  # display(list_head_1)
  # print "\nList 2: "
  # display(list_head_2)
  a1 = ListNode.new 4
  a2 = ListNode.new 1
  a3 = ListNode.new 8
  a4 = ListNode.new 4
  a5 = ListNode.new 5

  a1.next = a2
  a2.next = a3
  a3.next = a4
  a4.next = a5

  b1 = ListNode.new 5
  b2 = ListNode.new 6
  b3 = ListNode.new 1
  b4 = ListNode.new 8
  b5 = ListNode.new 4
  b6 = ListNode.new 5

  b1.next = b2
  b2.next = b3
  b3.next = b4
  b4.next = b5
  b5.next = b6
  intersect_node = intersect(a1, a2)
  puts "\nintersect at  #{intersect_node.data}"
  raise 'incorrect intersection found' unless intersect_node == node1

  puts 'all good'
end

main

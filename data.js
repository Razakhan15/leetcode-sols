export const data = [
  {
    problemNo: 13,
    heading: "13. Roman to Integer",
    image: "./images/13.png",
    code: `
    obj = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }
    sum = 0
    
    for i in range(len(s)):
      if i+1<len(s) and obj[s[i]]<obj[s[i+1]]:
        sum-=s[i]
      else:
        sum+=s[i]

    return sum
    `,
  },
  {
    problemNo: 1,
    heading: "1. Two Sum",
    image: "./images/1.png",
    code: `
    for i in range(len(nums)):
      for j in range(i+1, len(nums)):
        if nums[i]+nums[j] == target:
          return [i, j]
    `,
  },
  {
    problemNo: 9,
    heading: "9. Palindrome Number",
    image: "./images/9.png",
    code: `
    x = str(x)
    rev = x[::-1]

    return x == rev
---------------------------------
    org = x
    sum = 0

    while x>0:
      lstDigit = x%10
      sum = sum*10+lstDigit
      x//=10

    return org == sum
    `,
  },
  {
    problemNo: 14,
    heading: "14. Longest Common Prefix",
    image: "./images/14.png",
    code: `
    res = ""

    for i in range(len(strs[0])):
      for j in strs:
        if i==len(j) or strs[0][i] != j[i]:
          return res
      res+=strs[0][i]

    return res
    `,
  },
  {
    problemNo: 20,
    heading: "20. Valid Parentheses",
    image: "./images/20.png",
    code: `
    stack = []
    valid = {')':'(', ']':'[', '}':'{'}

    for i in s:
      if i in '([{':
        stack.append(i)
      else:
        if not stack or stack[-1]!=valid[i]:
          return False
        stack.pop

    return not stack
    `,
  },
  {
    problemNo: 21,
    heading: "21. Merge Two Sorted Lists",
    image: "./images/21.png",
    code: `
    dummy = ListNode()
    tail = dummy

    while list1 and list2:
      if list1.val < list2.val:
        tail.next = list1
        list1 = list1.next
      else:
        tail.next = list2
        list2 = list2.next
      tail = tail.next

    if list1:
      tail.next = list1
    else:
      tail.next = list2

    return dummy.next
    `,
  },
  {
    problemNo: 26,
    heading: "26. Remove Duplicates from Sorted Array",
    image: "./images/26.png",
    code: `
    i = 0

    while i+1<len(nums):
      if nums[i] == nums[i+1]: 
        nums.pop(i)
      else:
        i+=1

    return len(nums)
    `,
  },
  {
    problemNo: 27,
    heading: "27. Remove Element",
    image: "./images/27.png",
    code: `
    i = 0

    while i<len(nums):
      if nums[i] == val: 
        nums.pop(i)
      else:
        i+=1

    return len(nums)
    `,
  },
  {
    problemNo: 28,
    heading: "28. Find the Index of the First Occurrence in a String",
    image: "./images/28.png",
    code: `
    for i in range(len(haystack)):
      if haystack[i:len(needle)] == needle:
        return i

    return -1
    `,
  },
  {
    problemNo: 35,
    heading: "35. Search Insert Position",
    image: "./images/35.png",
    code: `
    l, r = 0, len(nums)-1

    while l<=r:
      mid = l + ((r-l)//2)
      if nums[mid] == target:
        return mid
      elif nums[mid] < target:
        l+=1
      else:
        r-=1

    return l
    `,
  },
  {
    problemNo: 58,
    heading: "58. Length of Last Word",
    image: "./images/58.png",
    code: `
    s = s.strip()
    lenOfWrd = 0

    for i in s:
      lenOfWrd+=1
      if i == " ":
        lenOfWrd = 0

    return lenOfWrd
    `,
  },
  {
    problemNo: 66,
    heading: "66. Plus One",
    image: "./images/66.png",
    code: `
    digits = digits[::-1]
    carry, i = 1, 0

    while carry and i<len(s):
      if digits[i] == 9:
        digits[i] = 0
        carry = 1
      else:
        digits[i] += 1
        carry = 0
        
    if carry:
      digits.append(1)

    return digits[::-1]
    `,
  },
  {
    problemNo: 67,
    heading: "67. Add Binary",
    image: "./images/67.png",
    code: `
    a = a[::-1]
    b = b[::-1]
    carry = i = 0
    res = ""

    while i<len(a) or i<len(b) or carry:
      dig1 = ord(a[i])-ord('0') if i<len(a) else 0
      dig2 = ord(b[i])-ord('0') if i<len(b) else 0
      add = dig1 + dig2 + carry
      carry = add//2
      res = str(add%2) + res
      i+=1

    return res
    `,
  },
  {
    problemNo: 69,
    heading: "69. Sqrt(x)",
    image: "./images/69.png",
    code: `
    res, l, r = 0, 0, x

    while l<=r:
      mid = l + ((r-l)//2)
      if mid**2 < x:
        l = mid+1
        res = mid
      elif mid**2 > x:
        r = mid-1
      else:
        return mid

    return res
    `,
  },
  {
    problemNo: 70,
    heading: "70. Climbing Stairs",
    image: "./images/70.png",
    code: `
    a, b = 1, 1

    for _ in range(n-1):
      temp = a
      a += b
      b = temp

    return a
    `,
  },
  {
    problemNo: 83,
    heading: "83. Remove Duplicates from Sorted List",
    image: "./images/83.png",
    code: `
    tail = head

    while tail and tail.next:
      if tail.val == tail.next.val:
        tail.next = tail.next.next
        continue
      tail = tail.next
      
    return head
    `,
  },
  {
    problemNo: 88,
    heading: "88. Merge Sorted Array",
    image: "./images/88.png",
    code: `
    last = m+n-1

    while m and n:
      if nums1[m-1] < nums2[n-1]:
        nums1[last] = nums2[n-1]
        n-=1
      else:
        nums1[last] = nums1[m-1]
        m-=1
      last -= 1

    while n:
      nums1[last] = nums2[n-1]
      n, last = n-1, last-1
    `,
  },
  {
    problemNo: 94,
    heading: "94. Binary Tree Inorder Traversal",
    image: "./images/94.png",
    code: `
    res = []

    def dfs(node):
      if not node:
        return
      dfs(node.left)
      res.append(node.val)
      dfs(node.right)

    dfs(root)
    return res
    `,
  },
  {
    problemNo: 100,
    heading: "100. Same Tree",
    image: "./images/100.png",
    code: `
    def dfs(p, q):
      if not p and not q:
        return True
      elif not p or not q:
        return False
      return p.val == q.val and dfs(p.left, q.left) and dfs(p.right, q.right)

    return dfs(p, q)
    `,
  },
  {
    problemNo: 104,
    heading: "104. Maximum Depth of Binary Tree",
    image: "./images/104.png",
    code: `
    def dfs(node):
      if not node:
        return 0
      return 1 + max(dfs(node.left), dfs(node.right))
      
    return dfs(root)
    `,
  },
  {
    problemNo: 111,
    heading: "111. Minimum Depth of Binary Tree",
    image: "./images/111.png",
    code: `
    if not root:
      return 0
    elif not node.left:
      return 1+self.minDepth(node.right)
    elif not node.right:
      return 1+self.minDepth(node.left)
    return 1+min(self.minDepth(node.left), self.minDepth(node.right))
    `,
  },
  {
    problemNo: 112,
    heading: "112. Path Sum",
    image: "./images/112.png",
    code: `
    if not root:
        return False
    targetSum-=root.val
    if not root.left and not root.right:
        return targetSum == 0
    return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)
    `,
  },
  {
    problemNo: 118,
    heading: "118. Pascal's Triangle",
    image: "./images/118.png",
    code: `
    res = [[1]]

    for i in range(numsRow):
      temp = [0] + res[-1] + [0]
      newAr = []
      for j in range(len(temp)-1):
        newAr.append(temp[j]+temp[j+1])
      res.append(newAr)
    
    return res
    `,
  },
  {
    problemNo: 121,
    heading: "121. Best Time to Buy and Sell Stock",
    image: "./images/121.png",
    code: `
    res = 0
    r, l = 0, 1

    while l<len(prices):
      if prices[r]<prices[l]:
        profit = prices[l]-prices[r]
        res = max(res, profit)
      else:
        r = l
      l+=1
    
    return res
    `,
  },
  {
    problemNo: 125,
    heading: "125. Valid Palindrome",
    image: "./images/125.png",
    code: `
    l, r = 0, len(s)-1

    while l<=r:
      while l<r and not self.alphaNumeric(s[l]):
        l+=1
      while l<r and not self.alphaNumeric(s[r]):
        r-=1
      if s[r].lower() != s[l].lower():
       return False
      l, r = l+1, r-1

    return True

    def alphaNumeric(self, ch):
      return ord('a')<=ord(ch)<=ord('z') or ord('A')<=ord(ch)<=ord('Z') or ord('0') <= ord(ch) <= ord('9')
    `,
  },
  {
    problemNo: 136,
    heading: "136. Single Number",
    image: "./images/136.png",
    code: `
    res = 0

    for i in nums:
      res = res^i
      
    return res
    `,
  },
  {
    problemNo: 141,
    heading: "141. Linked List Cycle",
    image: "./images/141.png",
    code: `
    fast = slow = head

    while fast and fast.next:
      fast = fast.next.next
      slow = slow.next
      if slow == fast:
      return True
    
    return False
    `,
  },
  {
    problemNo: 144,
    heading: "144. Binary Tree Preorder Traversal",
    image: "./images/144.png",
    code: `
    res = []

    def dfs(node):
      if not node:
        return
      res.append(node.val)
      dfs(node.left)
      dfs(node.right)

    dfs(root)
    return res
    `,
  },
  {
    problemNo: 145,
    heading: "145. Binary Tree Postorder Traversal",
    image: "./images/145.png",
    code: `
    res = []

    def dfs(node):
      if not node:
        return
      dfs(node.left)
      dfs(node.right)
      res.append(node.val)

    dfs(root)
    return res
    `,
  },
  {
    problemNo: 160,
    heading: "160. Intersection of Two Linked Lists",
    image: "./images/160.png",
    code: `
    l1, l2 = headA, headB

    while l1!=l2:
      l1 = l1.next if l1 else headB
      l2 = l2.next if l2 else headA

    return l1
    `,
  },
  {
    problemNo: 168,
    heading: "168. Excel Sheet Column Title",
    image: "./images/168.png",
    code: `
    res = ''

    while columnNumber:
      offset = (columnNumber-1)%26
      res = chr(ord('A')+offset)+res
      columnNumber = (columnNumber-1)//26

    return res
    `,
  },
  {
    problemNo: 169,
    heading: "169. Majority Element",
    image: "./images/169.png",
    code: `
    obj = {}
    res = maxCnt = 0

    for i in nums:
      obj[i] = 1 + obj.get(i, 0)
      res = i if obj[i]>maxCnt else res
      maxCnt = max(maxCnt, obj[i])
    
    return res
    `,
  },
  {
    problemNo: 171,
    heading: "171. Excel Sheet Column Number",
    image: "./images/171.png",
    code: `
    res = 0

    for i in columnTitle:
      res = res*26 + ord(i)-ord('A') + 1

    return res
    `,
  },
  {
    problemNo: 190,
    heading: "190. Reverse Bits",
    image: "./images/190.png",
    code: `
    res = 0

    for i in range(32):
      res = (res<<1) + (n&1)
      n>>=1
    
    return res
    `,
  },
  {
    problemNo: 202,
    heading: "202. Happy Number",
    image: "./images/202.png",
    code: `
    def isAlphaNum(num):
      sum = 0
      while num:
        dig = num%10
        sum += dig**2
        num//=10
      return sum

    visit = set()

    while n not in visit:
      visit.add(n)
      n = isAlphaNum(n)
      if n == 1:
        return True

    return False
    `,
  },
  {
    problemNo: 203,
    heading: "203. Remove Linked List Elements",
    image: "./images/203.png",
    code: `
    dummy = ListNode(next = head)
    prev, cur = dummy, dummy.next

    while cur:
      if cur.val == value:
        prev = cur.next
      else:
        prev = cur
      cur = cur.next

    return dummy.next
    `,
  },
  {
    problemNo: 205,
    heading: "205. Isomorphic Strings",
    image: "./images/205.png",
    code: `
    mapS, mapT = {}, {}

    while i, j in zip(s, t):
      if i in mapS and mapS[i] == j or j in mapT and mapT[j] == i:
        return False
      mapS[i] = j
      mapT[j] = i
    
    return False
    `,
  },
  {
    problemNo: 206,
    heading: "206. Reverse Linked List",
    image: "./images/206.png",
    code: `
    prev = None

    while head:
      temp = head.next
      head.next = prev
      prev = head
      head = temp
      
    return prev
    `,
  },
  {
    problemNo: 217,
    heading: "217. Contains Duplicate",
    image: "./images/217.png",
    code: `
    visit = set()

    for i in nums:
      if i in visit:
        return True
      visit.add(i)
    
    return False
    `,
  },
  {
    problemNo: 219,
    heading: "219. Contains Duplicate II",
    image: "./images/219.png",
    code: `
    visit = {}

    for j, i in enumerate(nums):
      if i in visit and abs(visit[i]-j)<=k:
        return True
      visit[i] = j
      
    return False
    `,
  },
  {
    problemNo: 222,
    heading: "222. Contains Duplicate II",
    image: "./images/222.png",
    code: `
    if not root:
      return 0

    return 1 + self.countNodes(root.left) + self.countNodes(root.right)
    `,
  },
];

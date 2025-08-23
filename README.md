# TypeChallnge
타입챌린지 레포지토리입니다. [문제집](https://github.com/type-challenges/type-challenges/blob/main/README.ko.md)

## 📚 목적

타입챌린지를 통해 타입스크립의 여러 유틸리티 타입 사용법과 타입에 대한 이해도를 높입니다.

주마다 30문제를 풀게됩니다.

쉬움(13) + 보통(103) + 어려움(55) = 171(문제)

기간: 8/18(월) ~ 9/26(금)

## 🙋 참여 방법

주 단위로 올라오는 문제들을 풀고 PR을 올립니다.

1. 깃 클론
2. 브랜치 생성

   ```sh
   git checkout -b <branch_name> ex) son,leo,rian,jay
   ```
   ⚠️ **주의사항** <br>
   ❌ 브랜치에서 절대 `git pull` 금지 ❌

3. 만든 브랜치를 remote repository에 등록

   ```sh
   git push -u origin <branch_name>
   ```

4. 푼 문제를 1️⃣ **본인 이름의 폴더에 넣고**, 2️⃣ **[convention](#commit)에 맞춰** commit

5. 제출 기한까지 본인의 브랜치를 **[convention](#pr)에 맞춰** PR

   📅 제출 기한 : 매주 토요일 23시 59분 59초 <br>

6. 일요일(24시)까지 다른사람의 코드를 보고 리뷰달기 (선택) <br/>

7. **문제 선정** <br>
문제 선정의 경우 **Son** 이 선정합니다. <br/>
주 별로 문제를 올려드립니다. (월요일 18시) <br/>

## 🤝 Convention

**파일 명** : 문제별로 파일을 만든다. ex) Pick.ts

### PR Title

```
[<week>] <이름>
```
PR 제목은 모두 소문자로 작성

### 리뷰내용

- 문제별로 파일 맨밑에 본인의 **문제풀이 사고과정**을 적습니다.
``` typescript
ex)
// Pick타입의 경우 T에서 K 프로퍼티만 선택해 만든 새로운 오브젝트 타입이다.
// K프로퍼티를 가져오기 위해 T를 배열형태로 돌아 인덱스 시그니처를 가져오면 된다고 생각했다.
// in 타입가드를 사용해 가져왔다.
```

- 리뷰 시, 궁금한 점 혹은 칭찬(많이많이)을 작성해주세요.
```typescript
ex)
이렇게 생각못했는데, 좋은데요?!
해당 키워드는 뭔가요?!
```

- 문제를 못 푸시면, 못 푼 이유를 작성해주세요.
```typescript
ex)
Pick타입에서 T를 배열형태로 어떻게 접근해야 할 지 떠오르지 않았다.
```

## ✍️ 문제

<details>
<summary><strong>📅 Week 01</strong> (~08/23)</summary>

<br/>

**워밍업 (1문제)**
- [![Hello World](https://img.shields.io/badge/00013-Hello%20World-teal)](https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.ko.md)

**쉬움 (10문제)**
- [![Pick](https://img.shields.io/badge/00004-Pick-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md)
- [![Readonly](https://img.shields.io/badge/00007-Readonly-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ko.md)
- [![Tuple to Object](https://img.shields.io/badge/00011-Tuple%20to%20Object-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ko.md)
- [![First of Array](https://img.shields.io/badge/00014-First%20of%20Array-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ko.md)
- [![Length of Tuple](https://img.shields.io/badge/00018-Length%20of%20Tuple-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ko.md)
- [![Exclude](https://img.shields.io/badge/00043-Exclude-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ko.md)
- [![Awaited](https://img.shields.io/badge/00189-Awaited-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ko.md)
- [![If](https://img.shields.io/badge/00268-If-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ko.md)
- [![Concat](https://img.shields.io/badge/00533-Concat-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ko.md)
- [![Includes](https://img.shields.io/badge/00898-Includes-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ko.md)

**보통 (19문제)**
- [![Get Return Type](https://img.shields.io/badge/00002-Get%20Return%20Type-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ko.md)
- [![Omit](https://img.shields.io/badge/00003-Omit-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ko.md)
- [![Readonly 2](https://img.shields.io/badge/00008-Readonly%202-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ko.md)
- [![Deep Readonly](https://img.shields.io/badge/00009-Deep%20Readonly-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ko.md)
- [![Tuple to Union](https://img.shields.io/badge/00010-Tuple%20to%20Union-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ko.md)
- [![Chainable Options](https://img.shields.io/badge/00012-Chainable%20Options-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.ko.md)
- [![Last of Array](https://img.shields.io/badge/00015-Last%20of%20Array-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ko.md)
- [![Pop](https://img.shields.io/badge/00016-Pop-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ko.md)
- [![Type Lookup](https://img.shields.io/badge/00062-Type%20Lookup-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ko.md)
- [![Trim Left](https://img.shields.io/badge/00106-Trim%20Left-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ko.md)
- [![Trim](https://img.shields.io/badge/00108-Trim-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ko.md)
- [![Capitalize](https://img.shields.io/badge/00110-Capitalize-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ko.md)
- [![Replace](https://img.shields.io/badge/00116-Replace-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.ko.md)
- [![ReplaceAll](https://img.shields.io/badge/00119-ReplaceAll-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ko.md)
- [![Append Argument](https://img.shields.io/badge/00191-Append%20Argument-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ko.md)
- [![Permutation](https://img.shields.io/badge/00296-Permutation-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.ko.md)
- [![Length of String](https://img.shields.io/badge/00298-Length%20of%20String-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.ko.md)
- [![Flatten](https://img.shields.io/badge/00459-Flatten-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.ko.md)
- [![Append to object](https://img.shields.io/badge/00527-Append%20to%20object-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.ko.md)

</details>

<details>
<summary><strong>📅 Week 02</strong> (~08/30)</summary>

<br/>

**쉬움 (3문제)**
- [![Push](https://img.shields.io/badge/03057-Push-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ko.md)
- [![Unshift](https://img.shields.io/badge/03060-Unshift-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ko.md)
- [![Parameters](https://img.shields.io/badge/03312-Parameters-7aad0c)](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ko.md)

**보통 (22문제)**
- [![Absolute](https://img.shields.io/badge/00529-Absolute-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.ko.md)
- [![String to Union](https://img.shields.io/badge/00531-String%20to%20Union-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.ko.md)
- [![Merge](https://img.shields.io/badge/00599-Merge-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.ko.md)
- [![KebabCase](https://img.shields.io/badge/00612-KebabCase-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.ko.md)
- [![Diff](https://img.shields.io/badge/00645-Diff-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.ko.md)
- [![AnyOf](https://img.shields.io/badge/00949-AnyOf-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.ko.md)
- [![IsNever](https://img.shields.io/badge/01042-IsNever-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.ko.md)
- [![IsUnion](https://img.shields.io/badge/01097-IsUnion-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.ko.md)
- [![ReplaceKeys](https://img.shields.io/badge/01130-ReplaceKeys-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.ko.md)
- [![Remove Index Signature](https://img.shields.io/badge/01367-Remove%20Index%20Signature-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.ko.md)
- [![Percentage Parser](https://img.shields.io/badge/01978-Percentage%20Parser-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.ko.md)
- [![Drop Char](https://img.shields.io/badge/02070-Drop%20Char-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.ko.md)
- [![MinusOne](https://img.shields.io/badge/02257-MinusOne-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.ko.md)
- [![PickByType](https://img.shields.io/badge/02595-PickByType-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.ko.md)
- [![StartsWith](https://img.shields.io/badge/02688-StartsWith-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.ko.md)
- [![EndsWith](https://img.shields.io/badge/02693-EndsWith-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.ko.md)
- [![PartialByKeys](https://img.shields.io/badge/02757-PartialByKeys-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.ko.md)
- [![RequiredByKeys](https://img.shields.io/badge/02759-RequiredByKeys-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.ko.md)
- [![Mutable](https://img.shields.io/badge/02793-Mutable-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.ko.md)
- [![OmitByType](https://img.shields.io/badge/02852-OmitByType-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.ko.md)
- [![ObjectEntries](https://img.shields.io/badge/02946-ObjectEntries-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.ko.md)
- [![Shift](https://img.shields.io/badge/03062-Shift-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.ko.md)

**어려움 (5문제)**
- [![Promise.all](https://img.shields.io/badge/00020-Promise.all-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ko.md)
- [![String to Number](https://img.shields.io/badge/00300-String%20to%20Number-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.ko.md)
- [![Length of String 2](https://img.shields.io/badge/00651-Length%20of%20String%202-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00651-hard-length-of-string-2/README.ko.md)
- [![Drop String](https://img.shields.io/badge/02059-Drop%20String-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.ko.md)
- [![Split](https://img.shields.io/badge/02822-Split-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/02822-hard-split/README.ko.md)

</details>

<details>
<summary><strong>📅 Week 03</strong> (~09/06)</summary>

<br/>

**보통 (25문제)**
- [![Tuple to Nested Object](https://img.shields.io/badge/03188-Tuple%20to%20Nested%20Object-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.ko.md)
- [![Reverse](https://img.shields.io/badge/03192-Reverse-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.ko.md)
- [![Flip Arguments](https://img.shields.io/badge/03196-Flip%20Arguments-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.ko.md)
- [![FlattenDepth](https://img.shields.io/badge/03243-FlattenDepth-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.ko.md)
- [![BEM style string](https://img.shields.io/badge/03326-BEM%20style%20string-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.ko.md)
- [![InorderTraversal](https://img.shields.io/badge/03376-InorderTraversal-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.ko.md)
- [![Flip](https://img.shields.io/badge/04179-Flip-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.ko.md)
- [![Fibonacci Sequence](https://img.shields.io/badge/04182-Fibonacci%20Sequence-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.ko.md)
- [![Allkeys](https://img.shields.io/badge/04260-Allkeys-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.ko.md)
- [![Greater Than](https://img.shields.io/badge/04425-Greater%20Than-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.ko.md)
- [![Zip](https://img.shields.io/badge/04471-Zip-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.ko.md)
- [![IsTuple](https://img.shields.io/badge/04484-IsTuple-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.ko.md)
- [![Chunk](https://img.shields.io/badge/04499-Chunk-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.ko.md)
- [![Fill](https://img.shields.io/badge/04518-Fill-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.ko.md)
- [![Trim Right](https://img.shields.io/badge/04803-Trim%20Right-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.ko.md)
- [![Without](https://img.shields.io/badge/05117-Without-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.ko.md)
- [![Trunc](https://img.shields.io/badge/05140-Trunc-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.ko.md)
- [![IndexOf](https://img.shields.io/badge/05153-IndexOf-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.ko.md)
- [![Join](https://img.shields.io/badge/05310-Join-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.ko.md)
- [![LastIndexOf](https://img.shields.io/badge/05317-LastIndexOf-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.ko.md)
- [![Unique](https://img.shields.io/badge/05360-Unique-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.ko.md)
- [![MapTypes](https://img.shields.io/badge/05821-MapTypes-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.ko.md)
- [![Construct Tuple](https://img.shields.io/badge/07544-Construct%20Tuple-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.ko.md)
- [![Number Range](https://img.shields.io/badge/08640-Number%20Range-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/08640-medium-number-range/README.ko.md)
- [![Combination](https://img.shields.io/badge/08767-Combination-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.ko.md)

**어려움 (5문제)**
- [![Simple Vue](https://img.shields.io/badge/00006-Simple%20Vue-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.ko.md)
- [![Union to Intersection](https://img.shields.io/badge/00055-Union%20to%20Intersection-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.ko.md)
- [![Get Required](https://img.shields.io/badge/00057-Get%20Required-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.ko.md)
- [![Get Optional](https://img.shields.io/badge/00059-Get%20Optional-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00059-hard-get-optional/README.ko.md)
- [![Tuple Filter](https://img.shields.io/badge/00399-Tuple%20Filter-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00399-hard-tuple-filter/README.ko.md)

</details>

<details>
<summary><strong>📅 Week 04</strong> (~09/13)</summary>

<br/>

**보통 (20문제)**
- [![Subsequence](https://img.shields.io/badge/08987-Subsequence-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.ko.md)
- [![CheckRepeatedChars](https://img.shields.io/badge/09142-CheckRepeatedChars-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09142-medium-checkrepeatedchars/README.ko.md)
- [![FirstUniqueCharIndex](https://img.shields.io/badge/09286-FirstUniqueCharIndex-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09286-medium-firstuniquecharindex/README.ko.md)
- [![Parse URL Params](https://img.shields.io/badge/09616-Parse%20URL%20Params-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09616-medium-parse-url-params/README.ko.md)
- [![GetMiddleElement](https://img.shields.io/badge/09896-GetMiddleElement-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09896-medium-get-middle-element/README.ko.md)
- [![FindAll](https://img.shields.io/badge/09898-FindAll-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su/README.ko.md)
- [![Count](https://img.shields.io/badge/09989-Count-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.ko.md)
- [![Integer](https://img.shields.io/badge/10969-Integer-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.ko.md)
- [![ToPrimitive](https://img.shields.io/badge/16259-ToPrimitive-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/16259-medium-to-primitive/README.ko.md)
- [![DeepMutable](https://img.shields.io/badge/17973-DeepMutable-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/17973-medium-deepmutable/README.ko.md)
- [![All](https://img.shields.io/badge/18142-All-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/18142-medium-all/README.ko.md)
- [![Filter](https://img.shields.io/badge/18220-Filter-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.ko.md)
- [![FindAll](https://img.shields.io/badge/21104-FindAll-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/21104-medium-findall/README.ko.md)
- [![Combination Key Type](https://img.shields.io/badge/21106-Combination%20Key%20Type-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.ko.md)
- [![Permutations of Tuple](https://img.shields.io/badge/21220-Permutations%20of%20Tuple-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/21220-medium-permutations-of-tuple/README.ko.md)
- [![Replace First](https://img.shields.io/badge/25170-Replace%20First-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/25170-medium-replace-first/README.ko.md)
- [![Transpose](https://img.shields.io/badge/25270-Transpose-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/25270-medium-transpose/README.ko.md)
- [![JSON Schema to TypeScript](https://img.shields.io/badge/26401-JSON%20Schema%20to%20TypeScript-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/26401-medium-json-schema-to-typescript/README.ko.md)
- [![Square](https://img.shields.io/badge/27133-Square-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/27133-medium-square/README.ko.md)
- [![Triangular number](https://img.shields.io/badge/27152-Triangular%20number-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/27152-medium-triangular-number/README.ko.md)

**어려움 (10문제)**
- [![Currying 1](https://img.shields.io/badge/00017-Currying%201-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.ko.md)
- [![Required Keys](https://img.shields.io/badge/00089-Required%20Keys-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00089-hard-required-keys/README.ko.md)
- [![Optional Keys](https://img.shields.io/badge/00090-Optional%20Keys-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00090-hard-optional-keys/README.ko.md)
- [![Capitalize Words](https://img.shields.io/badge/00112-Capitalize%20Words-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00112-hard-capitalizewords/README.ko.md)
- [![CamelCase](https://img.shields.io/badge/00114-CamelCase-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.ko.md)
- [![C-printf Parser](https://img.shields.io/badge/00147-C--printf%20Parser-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/README.ko.md)
- [![Vue Basic Props](https://img.shields.io/badge/00213-Vue%20Basic%20Props-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00213-hard-vue-basic-props/README.ko.md)
- [![IsAny](https://img.shields.io/badge/00223-IsAny-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.ko.md)
- [![Typed Get](https://img.shields.io/badge/00270-Typed%20Get-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00270-hard-typed-get/README.ko.md)
- [![Tuple to Enum Object](https://img.shields.io/badge/00472-Tuple%20to%20Enum%20Object-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.ko.md)

</details>

<details>
<summary><strong>📅 Week 05</strong> (~09/20)</summary>

<br/>

**보통 (16문제)**
- [![CartesianProduct](https://img.shields.io/badge/27862-CartesianProduct-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/27862-medium-cartesianproduct/README.ko.md)
- [![MergeAll](https://img.shields.io/badge/27932-MergeAll-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/27932-medium-mergeall/README.ko.md)
- [![CheckRepeatedTuple](https://img.shields.io/badge/27958-CheckRepeatedTuple-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/27958-medium-checkrepeatedtuple/README.ko.md)
- [![Public Type](https://img.shields.io/badge/28333-Public%20Type-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/28333-medium-public-type/README.ko.md)
- [![ExtractToObject](https://img.shields.io/badge/29650-ExtractToObject-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/29650-medium-extracttoobject/README.ko.md)
- [![Deep Omit](https://img.shields.io/badge/29785-Deep%20Omit-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/29785-medium-deep-omit/README.ko.md)
- [![IsOdd](https://img.shields.io/badge/30301-IsOdd-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/30301-medium-isodd/README.ko.md)
- [![Tower of hanoi](https://img.shields.io/badge/30430-Tower%20of%20hanoi-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/30430-medium-tower-of-hanoi/README.ko.md)
- [![Pascal's triangle](https://img.shields.io/badge/30958-Pascal's%20triangle-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/30958-medium-pascals-triangle/README.ko.md)
- [![Shitariteraru](https://img.shields.io/badge/30970-Shitariteraru-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/30970-medium-shitariteraru/README.ko.md)
- [![Compare Array Length](https://img.shields.io/badge/34007-Compare%20Array%20Length-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/34007-medium-compare-array-length/README.ko.md)
- [![DefinedPartialRecord](https://img.shields.io/badge/34857-DefinedPartialRecord-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/34857-medium-defined-partial-record/README.ko.md)
- [![Longest Common Prefix](https://img.shields.io/badge/35045-Longest%20Common%20Prefix-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/35045-medium-longest-common-prefix/README.ko.md)
- [![Trace](https://img.shields.io/badge/35191-Trace-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/35191-medium-trace/README.ko.md)
- [![IsAlphabet](https://img.shields.io/badge/35252-IsAlphabet-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/35252-medium-isalphabet/README.ko.md)
- [![MyUppercase](https://img.shields.io/badge/35991-MyUppercase-d9901a)](https://github.com/type-challenges/type-challenges/blob/main/questions/35991-medium-myuppercase/README.ko.md)

**어려움 (14문제)**
- [![Printf](https://img.shields.io/badge/00545-Printf-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00545-hard-printf/README.ko.md)
- [![Deep Object to Unique](https://img.shields.io/badge/00553-Deep%20Object%20to%20Unique-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00553-hard-deep-object-to-unique/README.ko.md)
- [![Union to Tuple](https://img.shields.io/badge/00730-Union%20to%20Tuple-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.ko.md)
- [![String Join](https://img.shields.io/badge/00847-String%20Join-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00847-hard-string-join/README.ko.md)
- [![DeepPick](https://img.shields.io/badge/00956-DeepPick-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/00956-hard-deeppick/README.ko.md)
- [![Pinia](https://img.shields.io/badge/01290-Pinia-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/01290-hard-pinia/README.ko.md)
- [![Camelize](https://img.shields.io/badge/01383-Camelize-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/01383-hard-camelize/README.ko.md)
- [![ClassPublicKeys](https://img.shields.io/badge/02828-ClassPublicKeys-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/02828-hard-classpublickeys/README.ko.md)
- [![IsRequiredKey](https://img.shields.io/badge/02857-IsRequiredKey-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/02857-hard-isrequiredkey/README.ko.md)
- [![ObjectFromEntries](https://img.shields.io/badge/02949-ObjectFromEntries-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/02949-hard-objectfromentries/README.ko.md)
- [![IsPalindrome](https://img.shields.io/badge/04037-IsPalindrome-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/04037-hard-ispalindrome/README.ko.md)
- [![Mutable Keys](https://img.shields.io/badge/05181-Mutable%20Keys-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/05181-hard-mutable-keys/README.ko.md)
- [![Intersection](https://img.shields.io/badge/05423-Intersection-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/05423-hard-intersection/README.ko.md)
- [![Binary to Decimal](https://img.shields.io/badge/06141-Binary%20to%20Decimal-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/06141-hard-binary-to-decimal/README.ko.md)

</details>

<details>
<summary><strong>📅 Week 06</strong> (~09/26)</summary>

<br/>

**어려움 (21문제)**
- [![Object Key Paths](https://img.shields.io/badge/07258-Object%20Key%20Paths-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.ko.md)
- [![Two Sum](https://img.shields.io/badge/08804-Two%20Sum-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/08804-hard-two-sum/README.ko.md)
- [![ValidDate](https://img.shields.io/badge/09155-ValidDate-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/09155-hard-validdate/README.ko.md)
- [![Assign](https://img.shields.io/badge/09160-Assign-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/09160-hard-assign/README.ko.md)
- [![Maximum](https://img.shields.io/badge/09384-Maximum-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/09384-hard-maximum/README.ko.md)
- [![Capitalize Nest Object Keys](https://img.shields.io/badge/09775-Capitalize%20Nest%20Object%20Keys-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/09775-hard-capitalize-nest-object-keys/README.ko.md)
- [![Replace Union](https://img.shields.io/badge/13580-Replace%20Union-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/13580-hard-replace-union/README.ko.md)
- [![FizzBuzz](https://img.shields.io/badge/14080-FizzBuzz-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/14080-hard-fizzbuzz/README.ko.md)
- [![Run-length encoding](https://img.shields.io/badge/14188-Run--length%20encoding-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/14188-hard-run-length-encoding/README.ko.md)
- [![Tree path array](https://img.shields.io/badge/15260-Tree%20path%20array-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/15260-hard-tree-path-array/README.ko.md)
- [![SnakeCase](https://img.shields.io/badge/19458-SnakeCase-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/19458-hard-snakecase/README.ko.md)
- [![IsNegativeNumber](https://img.shields.io/badge/25747-IsNegativeNumber-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/25747-hard-isnegativenumber/README.ko.md)
- [![OptionalUndefined](https://img.shields.io/badge/28143-OptionalUndefined-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/28143-hard-optionalundefined/README.ko.md)
- [![Unique Items](https://img.shields.io/badge/30178-Unique%20Items-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/30178-hard-unique-items/README.ko.md)
- [![BitwiseXOR](https://img.shields.io/badge/30575-BitwiseXOR-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/30575-hard-bitwisexor/README.ko.md)
- [![Sudoku](https://img.shields.io/badge/31797-Sudoku-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/31797-hard-sudoku/README.ko.md)
- [![Length of String 3](https://img.shields.io/badge/31824-Length%20of%20String%203-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/31824-hard-length-of-string-3/README.ko.md)
- [![Unbox](https://img.shields.io/badge/32427-Unbox-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/32427-hard-unbox/README.ko.md)
- [![Binary Addition](https://img.shields.io/badge/32532-Binary%20Addition-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/32532-hard-binary-addition/README.ko.md)
- [![Union to Object from Key](https://img.shields.io/badge/33763-Union%20to%20Object%20from%20Key-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/33763-hard-union-to-object-from-key/README.ko.md)
- [![Take Elements](https://img.shields.io/badge/34286-Take%20Elements-de3d37)](https://github.com/type-challenges/type-challenges/blob/main/questions/34286-hard-take-elements/README.ko.md)

</details>

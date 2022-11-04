# 리눅스 명령어

## 1. 터미널

```
터미널: terminal
   ↓
터미널 프로그램: shell / bash / ...
```

## 2. CLI/GUI

- **CLI**(Command line interface)
- **GUI**(Graphical User Interface)

## 3. 명령어

- `ls`(list): 리스트
- `cd`(change directory): 이동
  - `~`: home 디렉토리
  - `/`: 절대경로, root 디렉토리
    - `\`: 이스케이프 문자
  - `..`: 상대경로, 상위 디렉토리
- `mkdir`: 폴더 생성
- `pwd`(print working directory): 경로 확인
- `help`
- `man` + 명령어(manual): 매뉴얼, 플래그 안내
  > `man ls`: ls 매뉴얼 안내
  - `ls -l`(long): 상세 포맷
  - `ls -a`: 숨김 파일 출력
  - `ls -la`(= ll): 숨김 파일 포함 상세 포맷 출력
    > `ls -la > result.txt`: 로그 파일 생성
  - `mkdir -v`: verbose 모드로 폴더 생성
- `touch`: 파일의 수정시간 변경/파일이 없으면 신규 생성
- `clear`: 터미널 로그 클리어
- `echo`: 터미널에 텍스트 출력/파일 생성
  > `echo "hello" > test.txt`
- `cat`(concat): 파일 내용 확인
  > `cat test.txt`
- `cp`(copy)
- `mv`(move): 이름 변경
  > `mv test1.txt test2.txt`
- `rm`(remove): 파일 삭제
  > `rm -rf`: 비어있지 않은 중첩 디렉토리 강제 삭제(재확인 프롬프트 X)
- `rmdir`(remove directory): 폴더 삭제, 빈 폴더만 가능
- `find` + 경로 + 플래그 + 패턴: 파일 검색
  > `find . -name '*.txt'`: 현재 디렉토리 내 모든 txt 검색
- `wget`(web get): 웹 파일 다운로드

## 4. tip

- `alias ll = 'ls -a'`: 스니펫 설정
- `which node`: node 설치된 위치 확인
- traceroute: 네트워크 연결 상태를 자세히 판단할 때 사용하는 진단 도구
- 리눅스 관련 자격증은 한번에 4-5개 따는 것을 추천!
- 부하분산: 노드 밸런서
- ping, curl

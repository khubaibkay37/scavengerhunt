
letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
keys=['b', 's', 'j', 'c', 'n', 'q', 'f', 'e', 'h', 't', 'y', 'l', 'z', 'x', 'k', 'g', 'r', 'u', 'w', 'a', 'v', 'm', 'd', 'i', 'p', 'o']
scrambler={}

for key,val in zip(letters,keys):
    scrambler[key]=val

msg="I will reward you for reading and gonna make you listen something. \"link here\" go there and tell me what the audio means on email"
newmsg=""
for letter in msg:
    newmsg+=scrambler.get(letter,letter)
print(newmsg)
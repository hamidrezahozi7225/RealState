import { compare, hash } from 'bcryptjs';

const validateEmail = (email: string): null | RegExpMatchArray => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePassword(pwd: string): password {
  if (pwd.length <= 6)
    return {
      valid: false,
      message: 'Please make sure password is longer than 6 characters.',
    };

  if (!/[A-Z].*[A-Z]/.test(pwd))
    return {
      valid: false,
      message: 'Please make sure password includes 2 capital letters',
    };

  if (!/\d/.test(pwd))
    return {
      valid: false,
      message: 'Please make sure Password Includes a Digit',
    };

  if (/\s/.test(pwd))
    return { valid: false, message: 'Please only use visible characters' };

  return { valid: true, message: 'Valid Password' };
}

const hashPassword = async (pw: String): Promise<string> => {
  const hashedpw = await hash(pw, 12);

  return hashedpw;
};

const comparePassword = async (
  pw: string,
  hashPw: string
): Promise<boolean> => {
  const comp = await compare(pw, hashPw);
  return comp;
};

const e2p = (s) => s.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(',');
  return e2p(joinedNumber);
};

export {
  validateEmail,
  validatePassword,
  hashPassword,
  comparePassword,
  e2p,
  p2e,
  sp,
};

interface password {
  valid: boolean;
  message: string;
}

const useTelegram = () => {
  if (typeof window === 'undefined') {
    return {
      onClose: () => {},
      tg: null,
      user: null,
    };
  }

  const tg = window?.Telegram?.WebApp;

  const onClose = () => {
    tg.close();
  };
  console.log(tg?.initDataUnsafe)
  return {
    onClose,
    tg,
    user: tg?.initDataUnsafe?.user,
  };
};

export default useTelegram;
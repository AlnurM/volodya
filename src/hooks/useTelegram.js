const useTelegram = () => {
  if (typeof window === 'undefined') {
    return {
      onClose: () => {},
      tg: null,
      user: null,
    };
  }

  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    tg,
    user: tg.initData?.user,
  };
};

export default useTelegram;
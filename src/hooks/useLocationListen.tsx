/*
 * @Author: zyh
 * @Date: 2023-02-03 11:18:34
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 11:18:39
 * @FilePath: /vite-project/src/hooks/useLocationListen.tsx
 * @Description: useLocationListen
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';

export default (listener: (arg0: Location) => void) => {
  let location = useLocation();
  useEffect(() => {
    listener(location);
  }, [location]);
};

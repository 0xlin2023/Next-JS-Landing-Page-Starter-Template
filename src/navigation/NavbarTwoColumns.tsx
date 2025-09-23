import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';
import {
  Children,
  cloneElement,
  isValidElement,
  memo,
  useCallback,
} from 'react';

import { useMobileMenu } from '../hooks/useMobileMenu';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = memo((props: INavbarProps) => {
  const { isOpen, toggle, close, menuRef, buttonRef, isClient } =
    useMobileMenu();

  // 使用useCallback优化事件处理函数
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        close();
      }
    },
    [close],
  );

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-between py-4">
        <div className="shrink-0">
          <Link href="/" className="block">
            {props.logo}
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">{props.children}</ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggle}
            className="group relative p-2 text-gray-600 transition-all duration-300 hover:text-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          >
            <div className="flex size-6 flex-col items-center justify-center">
              {/* 汉堡菜单图标 - 添加动画效果 */}
              <span
                className={`block h-0.5 w-6 rounded-sm bg-current transition-all duration-300 ${
                  isOpen
                    ? 'translate-y-0.5 rotate-45'
                    : 'translate-y-0 rotate-0'
                }`}
              />
              <span
                className={`mt-1.5 block h-0.5 w-6 rounded-sm bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`mt-1.5 block h-0.5 w-6 rounded-sm bg-current transition-all duration-300 ${
                  isOpen
                    ? '-translate-y-2 -rotate-45'
                    : 'translate-y-0 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isClient && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      {isClient && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="移动端导航菜单"
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">菜单</h2>
            <button
              onClick={close}
              className="rounded-md p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2"
              aria-label="关闭菜单"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu content */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4" role="list" style={{ lineHeight: '1.5' }}>
              {Children.toArray(props.children).map((child, index) => {
                if (!isValidElement(child)) {
                  return null;
                }

                const mobileItemClass =
                  'block w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:translate-x-1 hover:bg-gray-50 hover:text-apple-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2';

                const normalizedChildren = Children.toArray(
                  child.props.children,
                ).filter(
                  (node) => !(typeof node === 'string' && node.trim() === ''),
                );

                const primaryNode = normalizedChildren[0];

                if (isValidElement(primaryNode)) {
                  const originalOnClick = primaryNode.props.onClick as
                    | ((event: React.MouseEvent) => void)
                    | undefined;
                  const originalOnKeyDown = primaryNode.props.onKeyDown as
                    | ((event: React.KeyboardEvent) => void)
                    | undefined;
                  const mergedClassName = [
                    mobileItemClass,
                    primaryNode.props.className,
                  ]
                    .filter(Boolean)
                    .join(' ');

                  const handleItemClick = (event: React.MouseEvent) => {
                    originalOnClick?.(event);
                    close();
                  };

                  const handleItemKeyDown = (event: React.KeyboardEvent) => {
                    originalOnKeyDown?.(event);
                    if (event.key === 'Enter' || event.key === ' ') {
                      close();
                    }
                  };

                  return (
                    <li key={index} role="listitem">
                      {cloneElement(primaryNode as ReactElement, {
                        className: mergedClassName,
                        onClick: handleItemClick,
                        onKeyDown: handleItemKeyDown,
                      })}
                    </li>
                  );
                }

                return (
                  <li key={index} role="listitem">
                    <button
                      type="button"
                      className={mobileItemClass}
                      onClick={close}
                      onKeyDown={handleKeyDown}
                    >
                      {normalizedChildren}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <p className="text-sm text-gray-500">众联达模具有限公司</p>
          </div>
        </div>
      )}
    </div>
  );
});

// 添加displayName以便调试
NavbarTwoColumns.displayName = 'NavbarTwoColumns';

export { NavbarTwoColumns };

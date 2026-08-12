import { Component } from 'react';

// 렌더링 중 발생하는 예기치 못한 오류를 잡아 화면 전체가 하얗게 죽는 것을 방지합니다.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 실제 서비스에서는 Sentry 등 에러 모니터링 도구로 전송하세요.
    console.error('UI error boundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black px-6 text-center text-white">
          <p className="text-lg font-semibold">문제가 발생했습니다.</p>
          <p className="text-sm text-white/60">페이지를 새로고침해서 다시 시도해주세요.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-2 rounded border border-white/40 px-4 py-2 text-sm hover:border-cyan-300 hover:text-cyan-300"
          >
            새로고침
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

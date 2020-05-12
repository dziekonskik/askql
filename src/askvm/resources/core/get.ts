import { askCode } from '../../../askcode';
import { any, resource, run, runUntyped } from '../../lib';

export const get = resource({
  type: any,
  async compute(options, code, args) {
    const [child] = code.params!;
    const name = await runUntyped(options, child, args);
    if (typeof name !== 'string') {
      throw new Error('Get expect string as argument');
    }

    return run(options, askCode({ name }), args);
  },
});

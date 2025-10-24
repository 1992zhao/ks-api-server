// 快手极速版模拟接口
export default function handler(req, res) {
  // 用户信息接口
  if (req.url.includes('/user/info')) {
    return res.json({
      result: 1,
      data: {
        userId: '123456',
        nickname: '测试用户',
        gold: 1500
      }
    });
  }

  // 余额信息接口
  if (req.url.includes('/account/balance')) {
    return res.json({
      result: 1,
      data: {
        gold: 1500,
        balance: 12.5
      }
    });
  }

  // 任务列表接口
  if (req.url.includes('/task/all')) {
    return res.json({
      result: 1,
      data: [
        {
          taskId: 'ad_001',
          taskName: '看广告得金币',
          status: 'available',
          reward: 10
        }
      ]
    });
  }

  // 广告任务接口
  if (req.url.includes('/task/treasurebox')) {
    return res.json({
      result: 1,
      data: {
        taskId: 'task_' + Date.now(),
        reward: 15
      }
    });
  }

  // 默认响应
  res.json({ result: 1, message: 'success' });
}
